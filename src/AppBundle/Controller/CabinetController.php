<?php

namespace AppBundle\Controller;

use AppBundle\Entity\PaymentLog;
use AppBundle\Entity\PaymentOrder;
use AppBundle\Entity\ProductLog;
use AppBundle\Entity\ProductResponse;
use AppBundle\Entity\Ticket;
use AppBundle\Entity\TicketComment;
use AppBundle\Entity\TicketLog;
use AppBundle\Entity\UserWithdrawal;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class  CabinetController extends Controller
{
    /**
     * @Route("/cabinet/", name="cabinet", options={"expose"=true})
     * @Template()
     */
    public function indexAction(Request $request)
    {
        return [
            "countries" => $this->getDoctrine()->getRepository('AppBundle:Country')->findBy(["active" => true], ["name" => "ASC"]),
            "languages" => $this->getDoctrine()->getRepository('AppBundle:Language')->findBy(["active" => true], ["name" => "ASC"])
        ];
    }

    /**
     * @Route("/cabinet/settings/write/", name="cabinet_settings_write")
     */
    public function settingsWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        $f = trim($request->get('f'));
        $i = trim($request->get('i'));
        $nickname = trim($request->get('nickname'));
        $lvl = trim($request->get('lvl'));
        $email = trim($request->get('email'));
        $birthdate = trim($request->get('birthdate'));
        $gender = trim($request->get('gender'));
        $languages = $request->get('languages');
        $specialization = trim($request->get('specialization'));
        $countryId = intval($request->get('country'));
        $city = trim($request->get('city'));
        $text = trim($request->get('text'));
        $notifySale = trim($request->get('notifySale'));
        $notifyNews = trim($request->get('notifyNews'));

        if ($f == '' OR $i == '' OR $email == '' OR $nickname == '') {
            return $returnError('Заполните обязательные поля', 'all');
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $returnError('Введите правильный e-mail', 'email');
        }

        // проверяем e-mail, изменился ли от того что сейчас, если да - то ищем в базе такой же
        if ($email != $user->getEmail()) {
            if ($existUser = $em->getRepository('AppBundle:User')->findOneBy(["email" => $email, 'enabled' => true]) AND $existUser != $user) {
                return $returnError('Пользователь с данным e-mail уже существует', 'email');
            }
            $user->setEmail($email);
        }

        // проверяем nickname, изменился ли от того что сейчас, если да - то ищем в базе такой же
        if ($nickname != $user->getNickname()) {
            if ($existUser = $em->getRepository('AppBundle:User')->findOneBy(["nickname" => $nickname, 'enabled' => true]) AND $existUser != $user) {
                return $returnError('Пользователь с данным ником уже существует', 'nickname');
            }
            $user->setNickname($nickname);
        }

        // проверяем дату рождения

        if ($birthdate) {
            $aBirthDay = [];
            $aBirthDay = explode('.', $birthdate);
            $aBirthDay = array_map('intval', $aBirthDay);

            if (count($aBirthDay) <> 3) {
                return $returnError('Введите правильно дату рождения', 'birthdate');
            } elseif (!checkdate($aBirthDay[1], $aBirthDay[0], $aBirthDay[2])) {
                return $returnError('Введите правильно дату рождения', 'birthdate');
            } else {
                $dateToCheck = new \DateTime($birthdate);

                $dateTime18 = new \DateTime("-18 years");
                if ($dateToCheck > $dateTime18) {
                    return $returnError('Вам должно быть больше 18-ти лет', 'birthdate');
                }
                $user->setBirthdate($dateToCheck);
            }
        }

        // формируем и записываем поле name из ФИО
        $a = [];
        if ($user->getF()) {
            $a[] = $user->getF();
        }
        if ($user->getI()) {
            $a[] = $user->getI();
        }
        if ($user->getO()) {
            $a[] = $user->getO();
        }
        $name = implode(' ', $a);
        $user->setName($name);

        $user->setF($f);
        $user->setI($i);

        if ($this->isGranted('ROLE_PREVIOUS_ADMIN')) {
            $user->setLvl($lvl);
        }

        if ($gender == 'm') {
            $user->setGender('m');
        } elseif ($gender == 'f') {
            $user->setGender('f');
        } else {
            $user->setGender(NULL);
        }

        if (is_array($languages)) {
            $user->setLanguages($languages);
        }

        $user->setSpecialization($specialization);

        if ($countryId) {
            $country = $em->getRepository('AppBundle:Country')->find($countryId);
            $user->setCountry($country);
        }

        $user->setCity($city);
        $user->setText($text);

        if($notifySale == '1'){
            $user->setNotifySale(true);
        }
        else{
            $user->setNotifySale(false);
        }

        if($notifyNews == '1'){
            $user->setNotifyNews(true);
        }
        else{
            $user->setNotifyNews(false);
        }

        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error" => false]);
    }

    /**
     * @Route("/cabinet/tickets/", name="cabinet_tickets", options={"expose"=true})
     * @Template()
     */
    public function ticketsAction(Request $request)
    {

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $filter = ["user"=>$this->getUser()];
        }
        else{
            $filter = [];
        }

        return [
            "entities" => $this->getDoctrine()->getRepository('AppBundle:Ticket')->findBy($filter, ["dateUpdate" => "DESC"])
        ];
    }

    /**
     * @Route("/cabinet/tickets/add/", name="cabinet_tickets_add", options={"expose"=true})
     * @Template()
     */
    public function ticketsAddAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $product = null;

        $productId = $request->get('product');

        if($productId){
            $productId = intval($productId);
            $product = $em->getRepository('AppBundle:Product')->find($productId);
        }

        return [
            "product"=>$product
        ];
    }

    /**
     * @Route("/cabinet/tickets/add/write/", name="cabinet_tickets_add_write")
     */
    public function ticketsAddWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $product = null;

        $productId = $request->get('product');

        if($productId){
            $productId = intval($productId);
            $product = $em->getRepository('AppBundle:Product')->find($productId);
        }

        $user = $this->getUser();

        $name = trim($request->get('name'));
        $text = trim($request->get('text'));

        if (!$name or !$text) {
            return $returnError('Заполните все поля', 'email');
        }

        $entity = new Ticket();
        $entity->setStatus('new');
        $entity->setUser($user);
        $entity->setProduct($product);
        $entity->setDate(new \DateTime());
        $entity->setDateUpdate(new \DateTime());
        $entity->setName($name);
        $entity->setText($text);

        $em->persist($entity);
        $em->flush($entity);

        $log = new TicketLog();
        $log->setTicket($entity);
        $log->setUser($this->getUser());
        $log->setDate(new \DateTime());
        $log->setText('Обращение создано');

        if($product){
            $log = new ProductLog();
            $log->setText('Создано обращение: '.$name);
            $log->setProduct($product);
            $log->setUser($this->getUser());
            $log->setDate(new \DateTime());
            $em->persist($log);
            $em->flush($log);
        }

        $em->persist($log);
        $em->flush($log);

        return JsonResponse::create(["error" => false, "url" => $this->generateUrl('cabinet_tickets_item', ["id" => $entity->getId()])]);
    }

    /**
     * @Route("/cabinet/tickets/{id}/", name="cabinet_tickets_item", options={"expose"=true})
     * @Template()
     */
    public function ticketsItemAction(Request $request, $id)
    {

        $entity = $this->getDoctrine()->getRepository('AppBundle:Ticket')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Ticket not found');
        }

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            if ($entity->getUser() != $this->getUser()) {
                throw $this->createNotFoundException('Ticket not found');
            }
        }

        return [
            "entity" => $entity,
            "comments" => $this->getDoctrine()->getRepository('AppBundle:TicketComment')->findBy(["ticket" => $entity], ["date" => "DESC"]),
            "logs" => $this->getDoctrine()->getRepository('AppBundle:TicketLog')->findBy(["ticket" => $entity], ["date" => "DESC"])
        ];
    }

    /**
     * @Route("/cabinet/tickets/{id}/comment/write/", name="cabinet_tickets_item_comment_write", options={"expose"=true})
     */
    public function ticketsItemCommentWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $entity = $this->getDoctrine()->getRepository('AppBundle:Ticket')->find($id);

        if (!$entity) {
            return $returnError('Ticket not found');
        }

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            if ($entity->getUser() != $this->getUser()) {
                return $returnError('Ticket not found');
            }
        }

        $text = trim($request->get('text', 'text'));

        if ($text == '') {
            return $returnError('Напишите комментарий', 'email');
        }

        $comment = new TicketComment();
        $comment->setTicket($entity);
        $comment->setUser($this->getUser());
        $comment->setDate(new \DateTime());
        $comment->setText($text);

        $em->persist($comment);
        $em->flush($comment);

        $entity->setDateUpdate(new \DateTime());
        $em->flush($entity);

        $comments = $em->getRepository('AppBundle:TicketComment')->findBy(["ticket" => $entity], ["date" => "ASC"]);

        $responseData = [];
        $responseData["comments"] = $comments;

        $html = $this->renderView('@App/Cabinet/_ticket_comments.html.twig', $responseData);

        return JsonResponse::create(["error" => false, 'html' => $html]);
    }

    /**
     * @Route("/cabinet/tickets/{id}/status/change/", name="cabinet_tickets_item_status_change", options={"expose"=true})
     */
    public function ticketsItemStatusChangeAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $entity = $this->getDoctrine()->getRepository('AppBundle:Ticket')->find($id);

        if (!$entity) {
            return $returnError('Ticket not found');
        }

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            if ($entity->getUser() != $this->getUser()) {
                return $returnError('Ticket not found');
            }
        }

        $status = trim($request->get('status'));

        if (!$status) {
            return $returnError('Выберите статус', 'email');
        }

        $entity->setStatus($status);
        $entity->setDateUpdate(new \DateTime());
        $em->flush($entity);

        if ($status == 'work') {
            $statusName = 'В работе';
        } elseif ($status == 'dublicate') {
            $statusName = 'Повтор';
        } elseif ($status == 'close') {
            $statusName = 'Закрыто';
        } else {
            $statusName = 'Неизвестный';
        }

        $log = new TicketLog();
        $log->setTicket($entity);
        $log->setUser($this->getUser());
        $log->setDate(new \DateTime());
        $log->setText('Статус изменен на: '.$statusName);

        $em->persist($log);
        $em->flush($log);

        $responseData = [];
        $responseData["entity"] = $entity;
        $responseData["logs"] = $this->getDoctrine()->getRepository('AppBundle:TicketLog')->findBy(["ticket" => $entity], ["date" => "DESC"]);

        $html = $this->renderView('@App/Cabinet/_ticket_data.html.twig', $responseData);

        return JsonResponse::create(["error" => false, 'html' => $html]);
    }

    /**
     * @Route("/cabinet/password/", name="cabinet_password", options={"expose"=true})
     * @Template()
     */
    public function passwordAction(Request $request)
    {

        return [
        ];
    }

    /**
     * @Route("/cabinet/password/write/", name="cabinet_password_write")
     */
    public function passwordWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        $password = trim($request->get('password'));
        $password_reply = trim($request->get('password_reply'));

        if ($password != $password_reply) {
            return $returnError('Введенные пароли не совпадают', 'email');
        }

        if (strlen($password) < 6) {
            return $returnError('Пароль не может быть меньше 6 символов', 'email');
        }

        $user->setPlainPassword($password);

        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error" => false]);
    }

    /**
     * @Route("/cabinet/social/", name="cabinet_social", options={"expose"=true})
     * @Template()
     */
    public function socialAction(Request $request)
    {

        return [
        ];
    }

    /**
     * @Route("/cabinet/withdrawal/write/", name="cabinet_withdrawal_write")
     */
    public function withdrawalWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $price = $request->get('price', 0);

        if (!$price) {
            return $returnError('Введите сумму', 'email');
        }

        $user = $this->getUser();

        $withdrawal = new UserWithdrawal();
        $withdrawal->setUser($user);
        $withdrawal->setDate(new \DateTime());
        $withdrawal->setPrice($price);

        $em->persist($withdrawal);
        $em->flush($withdrawal);

        $responseData = [
            "withdrawals" => $em->getRepository('AppBundle:UserWithdrawal')->findBy(["user" => $user], ["date" => "DESC"])
        ];

        $html = $this->renderView('@App/User/_withdrawals.html.twig', $responseData);

        return JsonResponse::create(["error" => false, "html" => $html]);
    }

    /**
     * @Route("/cabinet/buy/", name="cabinet_buy", options={"expose"=true})
     * @Template()
     */
    public function buyAction(Request $request)
    {
        $locale = $request->getLocale();
        $textBlock = $this->getDoctrine()->getRepository('AppBundle:RightTextBlock')->findOneBy(["type" => "buy"]);
        if ($locale == 'en') {
            $rightText = $textBlock->getTextEn();
        } else {
            $rightText = $textBlock->getText();
        }

        return [
            "settings" => $this->getDoctrine()->getRepository('AppBundle:Setting')->findOneBy([]),
            "rightText" => $rightText
        ];
    }

    /**
     * @Route("/cabinet/buy/write/", name="cabinet_buy_write", options={"expose"=true})
     */
    public function buyWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $settings = $this->getDoctrine()->getRepository('AppBundle:Setting')->findOneBy([]);

        $user = $this->getUser();

        $count = intval($request->get('count'));

        if ($count < 2) {
            return $returnError('Минимально для покупки 2 модели', 'email');
        }

        $order = new PaymentOrder();
        $order->setDate(new \DateTime());
        $order->setUser($user);
        $order->setPrice($settings->getModelPrice() * $count);
        $order->setCount($count);

        $em->persist($order);
        $em->flush($order);

//        $models = $user->getModels();
//        $models += $count;
//
//        $user->setModels($models);
//
//        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error" => false, 'url' => $this->generateUrl('cabinet_buy_order', ["id" => $order->getId()])]);
    }

    /**
     * @Route("/cabinet/buy/order/{id}/", name="cabinet_buy_order", options={"expose"=true})
     * @Template()
     */
    public function buyOrderAction(Request $request, $id)
    {

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($id);

        if (!$order) {
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity" => $order
        ];
    }

    /**
     * @Route("/yandex_kassa/success", name="yk_success", options={"expose"=true})
     * @Template()
     */
    public function ykSuccessAction(Request $request)
    {

        $orderId = $request->get('orderNumber', 0);

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($orderId);

        if (!$order) {
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity" => $order
        ];
    }

    /**
     * @Route("/yandex_kassa/fail", name="yk_fail", options={"expose"=true})
     * @Template()
     */
    public function ykFailAction(Request $request)
    {

        $orderId = $request->get('orderNumber', 0);

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($orderId);

        if (!$order) {
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity" => $order
        ];
    }

    /**
     * @Route("/cabinet/notify/", name="notify")
     * @Template()
     */
    public function notifyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $news = $em->getRepository('AppBundle:Notify')->findBy(["user"=>$this->getUser(), "active" => true], ["date" => "DESC"]);

        return [
            "entities" => $news
        ];
    }

    /**
     * @Route("/cabinet/notify/{id}/", name="notify_item")
     * @Template()
     */
    public function notifyItemAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('AppBundle:Notify')->findOneBy(['id' => $id, "active" => true]);

        return [
            "entity" => $entity
        ];
    }

}
