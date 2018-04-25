<?php

namespace AppBundle\Manager;

use AppBundle\Entity\ProductComment;
use AppBundle\Entity\Response;
use AppBundle\Entity\Subscribe;
use AppBundle\Entity\User;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

use AppBundle\Entity\Order;
use AppBundle\Entity\Product;

/**
 * Manager for notification.
 */
class NotifyManager
{
    private $em;
    private $settingRepository;
    private $settings;
    private $adminEmails;
    private $mailer;
    private $templating;
    private $mailFrom;
    private $mailFromName;

    public function __construct(EntityManager $em, $mailer, $templating, $container)
    {

        $this->em = $em;
        $this->settingRepository = $em->getRepository('AppBundle:Setting');
        $this->mailer = $mailer;
        $this->templating = $templating;
        $this->mailFrom = $container->getParameter('mailer_user');
        $this->mailFromName = $container->getParameter('mailer_user_name');

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

    private function _sendEmail($subject, $to, $text){


        $message = \Swift_Message::newInstance($subject)
            ->setContentType("text/html")
            ->setFrom($this->mailFrom, $this->mailFromName)
            ->setBody($text, 'text/html');

        if(is_array($to)){
            foreach ($to as $e){
                if(filter_var($e, FILTER_VALIDATE_EMAIL)){
                    $message->addTo($e);
                }
            }
        }elseif(is_string($to)){
            if(filter_var($to, FILTER_VALIDATE_EMAIL)){
                $message->addTo($to);
            }
        }

        $this->mailer->send($message);
    }

    /**
     *  Отправка сообщения о регистрации
     */
    public function sendRegistrationEmail(User $user, $password)
    {

        $messageText = $this->templating->render('AppBundle:Mail:registration.html.twig', [
            "user" => $user,
            "password" => $password
        ]);

        $this->_sendEmail('Регистрация на сайте Sellyourmodel.com', $user->getEmail(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель отмодерирована
     */
    public function sendModerationModelEmail(Product $product)
    {

        $messageText = $this->templating->render('AppBundle:Mail:productModeration.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('Ваша одобрена модератором', $product->getUser()->getEmail(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель заблокирована
     */
    public function sendBlockModelEmail(Product $product)
    {

        $messageText = $this->templating->render('AppBundle:Mail:productBlock.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('Ваша модель заблокирована модератором', $product->getUser()->getEmail(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель разблокирована
     */
    public function sendUnBlockModelEmail(Product $product)
    {

        $messageText = $this->templating->render('AppBundle:Mail:productUnBlock.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('С вашей модели снята блокировка', $product->getUser()->getEmail(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель куплена другим пользователем
     */
    public function sendBuyModelEmail(Product $product, User $user)
    {

        $messageText = $this->templating->render('AppBundle:Mail:productBuy.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        $this->_sendEmail('Ваша модель куплена пользователем', $product->getUser()->getEmail(), $messageText);

    }

    /**
     *  Отправка пользователю о покупке модели
     */
    public function sendBuyModelInfoEmail(Product $product, User $user)
    {

        $messageText = $this->templating->render('AppBundle:Mail:productBuyInfo.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        $this->_sendEmail('Вы купили модель', $product->getUser()->getEmail(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель заблокирована
     */
    public function sendAdminAddCommentEmail(ProductComment $comment)
    {

        $messageText = $this->templating->render('AppBundle:Mail:adminAddComment.html.twig', [
            "comment" => $comment
        ]);

        $this->_sendEmail('На сайте добавлен новый комментарий', $this->adminEmails, $messageText);

    }

    /**
     *  Отправка тестового сообщения
     */
    public function sendTestMessage()
    {
        $this->_sendEmail('Тестовое сообщение', 'ivanov@web-premier.ru', 'Тестовая отправка');
    }

}