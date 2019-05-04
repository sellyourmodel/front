<?php

namespace App\Manager;

use App\Entity\Message;
use App\Entity\Notify;
use App\Entity\ProductComment;
use App\Entity\Response;
use App\Entity\Subscribe;
use App\Entity\TrackerTask;
use App\Entity\TrackerTaskComment;
use App\Entity\User;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

use App\Entity\Order;
use App\Entity\Product;

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
        $this->settingRepository = $em->getRepository('App:Setting');
        $this->mailer = $mailer;
        $this->templating = $templating;
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

    private function _sendEmail($subject, $to, $text, $sendEmail = true){

        if($to instanceof User){
            $email = $to->getEmail();

            /*$notify = new Notify();
            $notify->setUser($to);
            $notify->setName($subject);
            $notify->setDate(new \DateTime());
            $notify->setText($text);

            $this->em->persist($notify);
            $this->em->flush($notify);*/

        }
        else{
            $email = $to;
        }

        if($sendEmail){
            $message = new \Swift_Message($subject);
            $message
                ->setContentType("text/html")
                ->setFrom($this->mailFrom, $this->mailFromName)
                ->setBody($text, 'text/html');

            if(is_array($email)){
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

    }

    /**
     *  Отправка сообщения о регистрации
     */
    public function sendRegistrationEmail(User $user, $password, $code)
    {

        $messageText = $this->templating->render('mail/registration.html.twig', [
            "user" => $user,
            "password" => $password,
            "code"=>$code
        ]);

        $this->_sendEmail('Регистрация на сайте Sellyourmodel.com', $user, $messageText);

    }

    /**
     *  Отправка сообщения о блокировке после не подтверждения email
     */
    public function sendBlockByRegistrationEmail(User $user)
    {

        $messageText = $this->templating->render('mail/registrationBlockBy24H.html.twig', [
            "user" => $user
        ]);

        $this->_sendEmail('Блокировка аккаунта на сайте Sellyourmodel.com', $user, $messageText);

    }

    /**
     *  Отправка автору о том, что его модель отмодерирована
     */
    public function sendModerationModelEmail(Product $product)
    {

        $messageText = $this->templating->render('mail/productModeration.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('Ваша одобрена модератором', $product->getUser(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель заблокирована
     */
    public function sendBlockModelEmail(Product $product)
    {

        $messageText = $this->templating->render('mail/productBlock.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('Ваша модель заблокирована модератором', $product->getUser(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель разблокирована
     */
    public function sendUnBlockModelEmail(Product $product)
    {

        $messageText = $this->templating->render('mail/productUnBlock.html.twig', [
            "product" => $product
        ]);

        $this->_sendEmail('С вашей модели снята блокировка', $product->getUser(), $messageText);

    }

    /**
     *  Отправка автору о том, что его модель куплена другим пользователем
     */
    public function sendBuyModelEmail(Product $product, User $user)
    {

        $messageText = $this->templating->render('mail/productBuy.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        if($product->getUser()->getNotifySale()){
            $sendEmail = true;
        }
        else{
            $sendEmail = false;
        }

        $notify = new Notify();
        $notify->setProduct($product);
        $notify->setUser($product->getUser());
        $notify->setUser2($user);
        $notify->setType("buy");
        $notify->setDate(new \DateTime());

        $this->em->persist($notify);
        $this->em->flush($notify);

        $this->_sendEmail('Ваша модель куплена пользователем', $product->getUser(), $messageText, $sendEmail);

    }

    /**
     *  Отправка пользователю о покупке модели
     */
    public function sendBuyModelInfoEmail(Product $product, User $user)
    {

        $messageText = $this->templating->render('mail/productBuyInfo.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        if($user->getNotifySale()){
            $sendEmail = true;
        }
        else{
            $sendEmail = false;
        }

        $this->_sendEmail('Вы купили модель', $user, $messageText, $sendEmail);

    }

    /**
     *  Отправка пользователю о комментировании его модели
     */
    public function sendAddCommentEmail(ProductComment $comment)
    {

        if($comment->getProduct()->getUser() != $comment->getUser()){
            $notify = new Notify();
            $notify->setProduct($comment->getProduct());
            $notify->setUser($comment->getProduct()->getUser());
            $notify->setUser2($comment->getUser());
            $notify->setType("comment");
            $notify->setText($comment->getText());
            $notify->setDate(new \DateTime());

            $this->em->persist($notify);
            $this->em->flush($notify);
        }

    }

    /**
     *  Отправка администратору о новой модели
     */
    public function sendAdminNewProduct(Product $product, User $user)
    {

        $messageText = $this->templating->render('mail/adminNewProduct.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        $this->_sendEmail('На сайте добавлена новая модель', $this->adminEmails, $messageText);

    }

    /**
     *  Отправка администратору о редактировании модели
     */
    public function sendAdminEditProduct(Product $product, User $user)
    {

        $messageText = $this->templating->render('mail/adminEditProduct.html.twig', [
            "product" => $product,
            "user" => $user
        ]);

        $this->_sendEmail('На сайте отредактирована модель', $this->adminEmails, $messageText);

    }

    /**
     *  Отправка администраторам нового комментария
     */
    public function sendAdminAddCommentEmail(ProductComment $comment)
    {

        $messageText = $this->templating->render('mail/adminAddComment.html.twig', [
            "comment" => $comment
        ]);

        $this->_sendEmail('На сайте добавлен новый комментарий', $this->adminEmails, $messageText);

    }

    /**
     *  Отправка уведомления о новом сообщении
     */
    public function sendNewMessageEmail(Message $message)
    {

        $messageText = $this->templating->render('mail/newMessage.html.twig', [
            "message" => $message
        ]);

        $this->_sendEmail('Вам пришло личное сообщение', $message->getTo()->getEmail(), $messageText);

    }

    /**
     *  Отправка сообщения о новой задаче в трекере
     */
    public function sendTrackerNewTaskEmail(User $user, TrackerTask $task)
    {

        $messageText = $this->templating->render('mail/tracker_task.html.twig', [
            "user" => $user,
            "task" => $task
        ]);

        $this->_sendEmail('Новая задача в трекере на сайте Sellyourmodel.com', $user, $messageText);

    }

    /**
     *  Отправка сообщения о комментарии в трекере
     */
    public function sendTrackerNewCommentEmail(User $user, TrackerTaskComment $comment)
    {

        $messageText = $this->templating->render('mail/tracker_new_comment.html.twig', [
            "user" => $user,
            "comment" => $comment
        ]);

        $this->_sendEmail('Новый комментарий в трекере на сайте Sellyourmodel.com', $user, $messageText);

    }

    /**
     *  Отправка сообщения о изменении статуса в трекере
     */
    public function sendTrackerChangeStatusEmail(User $user, TrackerTask $task, User $changer)
    {

        $messageText = $this->templating->render('mail/tracker_change_status.html.twig', [
            "user" => $user,
            "changer" => $changer,
            "task" => $task
        ]);

        $this->_sendEmail('Изменение статуса задачи в трекере на сайте Sellyourmodel.com', $user, $messageText);

    }

    /**
     *  Отправка тестового сообщения
     */
    public function sendTestMessage()
    {
        $this->_sendEmail('Тестовое сообщение', 'ivanov@web-premier.ru', 'Тестовая отправка');
    }

}