<?php

namespace App\Controller;

use App\Entity\Subscribe;
use App\Helper\SendPulse\SendpulseApi;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SubscribeController extends Controller
{
    /**
     * @Route("/subscribe/", name="subscribe", options={"expose"=true})
     */
    public function subscribeAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $email = $request->get('email');

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return JsonResponse::create(["error" => true, "error_text"=>"Введите правильный e-mail"]);
        }

        $subscribe = $em->getRepository('App:Subscribe')->findOneBy(["email"=>$email]);

        if($subscribe){
            return JsonResponse::create(["error" => true, "error_text"=>"Вы уже подписаны на рассылку"]);
        }

        $SPApiProxy = new SendpulseApi( getenv('sendpulse_client_id'), getenv('sendpulse_client_secret'), 'file' );
        $SPApiProxy->addEmails(getenv('sendpulse_book_subscribe'),[["email"=>$email]]);

        $subscribe = new Subscribe();
        $subscribe->setEmail($email);
        $subscribe->setDate(new \DateTime());

        $em->persist($subscribe);
        $em->flush($subscribe);

        return JsonResponse::create(["error" => false]);
    }

    /**
     * @Route("/subscribe/remove/", name="subscribe_remove", options={"expose"=true})
     * @Template()
     */
    public function subscribeRemoveAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $code = $request->get('code');

        if($code == ''){
            throw $this->createNotFoundException('Code not found');
        }

        $subscribe = $em->getRepository('App:Subscribe')->findOneBy(["code"=>$code]);

        if(!$subscribe){
            throw $this->createNotFoundException('Code not found');
        }

        $breadcrumbs = $this->get("white_october_breadcrumbs");
        $breadcrumbs->addItem("Главная", $this->get("router")->generate("homepage"));
        $breadcrumbs->addItem("Отписаться от рассылки");

        return [
            "subscribe"=>$subscribe
        ];
    }

    /**
     * @Route("/subscribe/remove/write/", name="subscribe_remove_write", options={"expose"=true})
     */
    public function subscribeRemoveWriteAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /*$email = $request->get('email');
        $code = $request->get('code');

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return JsonResponse::create(["error" => true, "error_text"=>"Введите правильный e-mail"]);
        }

        $subscribe = $em->getRepository('App:Subscribe')->findOneBy(["email"=>$email]);

        if($subscribe){
            return JsonResponse::create(["error" => true, "error_text"=>"Вы уже получали купон за подписку на рассылку"]);
        }

        $couponNumber = "SB-".strtoupper(chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)));
        $couponExist = $em->getRepository('App:Coupon')->findOneBy(["number"=>$couponNumber]);

        while($couponExist){
            $couponNumber = "SB-".strtoupper(chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)));
            $couponExist = $em->getRepository('App:Coupon')->findOneBy(["number"=>$couponNumber]);
        }

        $coupon = new Coupon();
        $coupon->setNumber($couponNumber);
        $coupon->setPersent(5);
        $coupon->setType('persent');

        $em->persist($coupon);
        $em->flush($coupon);

        $subscribe = new Subscribe();
        $subscribe->setEmail($email);
        $subscribe->setDate(new \DateTime());
        $subscribe->setCoupon($coupon);

        $em->persist($subscribe);
        $em->flush($subscribe);

        $this->get('wp.notification.manager')->sendSubscribeUser($subscribe);
        $this->get('wp.notification.manager')->sendSubscribeAdmin($subscribe);*/

        $code = $request->get('code');

        if($code == ''){
            return JsonResponse::create(["error" => true, "error_text"=>"Код отписки не найден"]);
        }

        $subscribe = $em->getRepository('App:Subscribe')->findOneBy(["code"=>$code]);

        if(!$subscribe){
            return JsonResponse::create(["error" => true, "error_text"=>"Вы не подписаны на рассылку"]);
        }

        $em->remove($subscribe);
        $em->flush($subscribe);

        return JsonResponse::create(["error" => false]);
    }
}
