<?php

namespace App\Manager;

use App\Entity\Buy;
use App\Entity\Message;
use App\Entity\Notify;
use App\Entity\PaymentLog;
use App\Entity\ProductComment;
use App\Entity\ProductLog;
use App\Entity\Response;
use App\Entity\Setting;
use App\Entity\Subscribe;
use App\Entity\TrackerTask;
use App\Entity\TrackerTaskComment;
use App\Entity\User;
use Symfony\Bridge\Twig\TwigEngine;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

use App\Entity\Product;

/**
 * Manager for payments.
 */
class PaymentManager
{
    private $em;
    private $settingRepository;
    /** @var Setting settings */
    private $settings;
    private $adminEmails;
    private $mailer;
    /** @var TwigEngine */
    private $templating;
    /** @var Container */
    private $container;
    private $mailFrom;
    private $mailFromName;

    public function __construct(EntityManager $em, $mailer, $templating, $container)
    {

        $this->em = $em;
        $this->settingRepository = $this->em->getRepository('App:Setting');
        $this->mailer = $mailer;
        $this->templating = $templating;
        $this->container = $container;
        $this->mailFrom = 'sites-mailer@web-premier.ru';
        $this->mailFromName = 'Sellyourmodel.com';

        $this->settings = $this->settingRepository->findOneBy([]);

        $adminsEmailsRaw = $this->settings->getEmailAdmin();
        $a = explode(',', $adminsEmailsRaw);
        $this->adminEmails = [];
        foreach ($a as $e){
            $e = trim($e);
            if(filter_var($e, FILTER_VALIDATE_EMAIL)){
                $this->adminEmails[] = $e;
            }
        }


    }

    /**
     *  Покупка модели пользователем
     */
    public function buyModel(User $user, Product $product)
    {

        $settings = $this->settings;

        /*
         * Уменьшаем у пользователя кол-во доступных моделей
         * TODO: переделать хранение доступного окл-ва моделей в отдельную табилцу
         */
        $models = $user->getModels();
        $models -= 1;
        $user->setModels($models);
        $this->container->get("fos_user.user_manager")->updateUser($user);

        /*
         * Увеличиваем статистику у модели
         */
        $product->setDownloads($product->getDownloads() + 1);
        $this->em->persist($product);
        $this->em->flush($product);

        /*
         * Увеличиваем статистику у автора
         */
        $author = $product->getUser();
        if ($author) {
            $author->setModelsLoadedBuy($author->getModelsLoadedBuy() + 1);
            $this->container->get("fos_user.user_manager")->updateUser($author);
        }

        /*
         * Сохраняем покупку для пользователя
         */
        $buy = new Buy();
        $buy->setDate(new \DateTime());
        $buy->setUser($user);
        $buy->setProduct($product);
        $buy->setPrice(1);

        $this->em->persist($buy);
        $this->em->flush($buy);

        /*
         * Пишем лог к модели, что ее купили
         */
        $log = new ProductLog();
        $log->setText('product_log_buyed');
        $log->setProduct($product);
        $log->setUser($user);
        $log->setDate(new \DateTime());
        $this->em->persist($log);
        $this->em->flush($log);

        /*
         * Начисляем коммисию автору
         */
        $price = intval($settings->getModelPrice() / 2);

        $transaction = new PaymentLog();
        $transaction->setDate(new \DateTime());
        $transaction->setUser($author);
        $transaction->setPrice($price);
        $transaction->setName('Коммисия с покупки модели "' . $product->getName() . '"');
        $transaction->setType('sell');

        $this->em->persist($transaction);
        $this->em->flush($transaction);

        /*
         * Обновляем баланс автора
         */
        $this->_updateUserBalance($author);

        $this->container->get('wp.notify.manager')->sendBuyModelEmail($product, $user);
        $this->container->get('wp.notify.manager')->sendBuyModelInfoEmail($product, $user);

    }

    public function moderationModel(Product $product, User $moderator){

        $user = $product->getUser();

        /*
         * Записываем лог что модель отмодерирована
         */
        $log = new ProductLog();
        $log->setText('product_log_moderated');
        $log->setProduct($product);
        $log->setUser($moderator);
        $log->setDate(new \DateTime());
        $this->em->persist($log);
        $this->em->flush($log);

        /*
         * Обновляем статистику автора по загруженным моделям
         */
        $modelsModeration = $this->em->getRepository('App:Product')->findBy(["user"=>$user, "moderated"=>false]);
        $user->setModelsModeration(count($modelsModeration));
        $this->container->get("fos_user.user_manager")->updateUser($user);

        /*
         * Временно отключаем начисление коммисий за загрузку моделей
         */
        return;

        /*
         * Если автору уже выплачено то ничего не начисляем
         */
        if($product->getPaidAuthor()){
            return;
        }

        $settings = $this->settings;

        /*
         * Начисляем коммисию автору
         */
        $price = intval($settings->getLoadModelPrice());

        $transaction = new PaymentLog();
        $transaction->setDate(new \DateTime());
        $transaction->setUser($user);
        $transaction->setPrice($price);
        $transaction->setName('Коммисия с загрузку модели "' . $product->getName() . '"');
        $transaction->setType('sell');

        $this->em->persist($transaction);
        $this->em->flush($transaction);

        $product->setPaidAuthor(true);
        $this->em->flush($product);

        /*
         * Обновляем баланс автора
         */
        $this->_updateUserBalance($user);

    }

    private function _updateUserBalance(User $user){
        $payments = $this->em->getRepository('App:PaymentLog')->findBy(["user"=>$user]);

        $balance = 0;

        /** @var PaymentLog $payments */
        foreach($payments as $e){
            $balance += $e->getPrice();
        }
        $user->setBalance($balance);

        $this->container->get("fos_user.user_manager")->updateUser($user);
    }

}