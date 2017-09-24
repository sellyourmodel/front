<?php

namespace AppBundle\Controller;

use AppBundle\Entity\PaymentLog;
use AppBundle\Entity\PaymentOrder;
use AppBundle\Entity\ProductResponse;
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
            "countries"=>$this->getDoctrine()->getRepository('AppBundle:Country')->findBy(["active"=>true], ["name"=>"ASC"]),
            "languages"=>$this->getDoctrine()->getRepository('AppBundle:Language')->findBy(["active"=>true], ["name"=>"ASC"])
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

        if($f == '' OR $i == '' OR $email == '' OR $nickname == ''){
            return $returnError('Заполните обязательные поля','all');
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return $returnError('Введите правильный e-mail','email');
        }

        // проверяем e-mail, изменился ли от того что сейчас, если да - то ищем в базе такой же
        if($email != $user->getEmail()){
            if($existUser = $em->getRepository('AppBundle:User')->findOneBy(["email"=>$email,'enabled'=>true]) AND $existUser != $user){
                return $returnError('Пользователь с данным e-mail уже существует','email');
            }
            $user->setEmail($email);
        }

        // проверяем nickname, изменился ли от того что сейчас, если да - то ищем в базе такой же
        if($nickname != $user->getNickname()){
            if($existUser = $em->getRepository('AppBundle:User')->findOneBy(["nickname"=>$nickname,'enabled'=>true]) AND $existUser != $user){
                return $returnError('Пользователь с данным ником уже существует','nickname');
            }
            $user->setNickname($nickname);
        }

        // проверяем дату рождения

        if($birthdate){
            $aBirthDay = [];
            $aBirthDay = explode('.',$birthdate);
            $aBirthDay = array_map('intval',$aBirthDay);

            if(count($aBirthDay) <> 3){
                return $returnError('Введите правильно дату рождения','birthdate');
            }
            elseif(!checkdate($aBirthDay[1],$aBirthDay[0],$aBirthDay[2])){
                return $returnError('Введите правильно дату рождения','birthdate');
            }
            else{
                $dateToCheck = new \DateTime($birthdate);

                $dateTime18 = new \DateTime("-18 years");
                if($dateToCheck > $dateTime18){
                    return $returnError('Вам должно быть больше 18-ти лет','birthdate');
                }
                $user->setBirthdate($dateToCheck);
            }
        }

        // формируем и записываем поле name из ФИО
        $a = [];
        if($user->getF()){
            $a[] = $user->getF();
        }
        if($user->getI()){
            $a[] = $user->getI();
        }
        if($user->getO()){
            $a[] = $user->getO();
        }
        $name = implode(' ',$a);
        $user->setName($name);

        $user->setF($f);
        $user->setI($i);

        if($this->isGranted('ROLE_PREVIOUS_ADMIN')){
            $user->setLvl($lvl);
        }

        if($gender == 'm'){
            $user->setGender('m');
        }
        elseif($gender == 'f'){
            $user->setGender('f');
        }
        else{
            $user->setGender(NULL);
        }

        if(is_array($languages)){
            $user->setLanguages($languages);
        }

        $user->setSpecialization($specialization);

        if($countryId){
            $country = $em->getRepository('AppBundle:Country')->find($countryId);
            $user->setCountry($country);
        }

        $user->setCity($city);
        $user->setText($text);

        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error"=>false]);
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

        if($password != $password_reply){
            return $returnError('Введенные пароли не совпадают','email');
        }

        if(strlen($password) < 6){
            return $returnError('Пароль не может быть меньше 6 символов','email');
        }

        $user->setPlainPassword($password);

        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error"=>false]);
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

        if(!$price){
            return $returnError('Введите сумму','email');
        }

        $user = $this->getUser();

        $withdrawal = new UserWithdrawal();
        $withdrawal->setUser($user);
        $withdrawal->setDate(new \DateTime());
        $withdrawal->setPrice($price);

        $em->persist($withdrawal);
        $em->flush($withdrawal);

        $responseData = [
            "withdrawals"=>$em->getRepository('AppBundle:UserWithdrawal')->findBy(["user"=>$user],["date"=>"DESC"])
        ];

        $html = $this->renderView('@App/User/_withdrawals.html.twig', $responseData);

        return JsonResponse::create(["error"=>false, "html"=>$html]);
    }

    /**
     * @Route("/cabinet/buy/", name="cabinet_buy", options={"expose"=true})
     * @Template()
     */
    public function buyAction(Request $request)
    {

        return [
            "settings"=>$this->getDoctrine()->getRepository('AppBundle:Setting')->findOneBy([])
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

        if($count == 0){
            return $returnError('Количество должно быть большое 0','email');
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

        return JsonResponse::create(["error"=>false, 'url'=>$this->generateUrl('cabinet_buy_order', ["id"=>$order->getId()])]);
    }

    /**
     * @Route("/cabinet/buy/order/{id}/", name="cabinet_buy_order", options={"expose"=true})
     * @Template()
     */
    public function buyOrderAction(Request $request, $id)
    {

        $order = $this->getDoctrine()->getRepository('AppBundle:PaymentOrder')->find($id);

        if(!$order){
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity"=>$order
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

        if(!$order){
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity"=>$order
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

        if(!$order){
            throw $this->createNotFoundException('Order not found');
        }

        return [
            "entity"=>$order
        ];
    }

    /**
     * @Route("/cabinet/notify/", name="notify")
     * @Template()
     */
    public function notifyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $news = $em->getRepository('AppBundle:Notify')->findBy(["active"=>true],["date"=>"DESC"]);

        return [
            "entities"=>$news
        ];
    }

    /**
     * @Route("/cabinet/notify/{id}/", name="notify_item")
     * @Template()
     */
    public function notifyItemAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('AppBundle:Notify')->findOneBy(['id'=>$id, "active"=>true]);

        return [
            "entity"=>$entity
        ];
    }

}
