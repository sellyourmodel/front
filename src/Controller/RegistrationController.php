<?php

namespace App\Controller;

use App\Entity\ProductLog;
use App\Entity\User;
use App\Helper\SendPulse\SendpulseApi;
use FOS\UserBundle\Security\LoginManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccountStatusException;

class  RegistrationController extends Controller
{

    private $loginManager;

    public function __construct(LoginManagerInterface $loginManager){
        $this->loginManager = $loginManager;
    }


    /**
     * @Route("/registration/", name="registration")
     * @Template()
     */
    public function indexAction(Request $request)
    {

        if($this->getUser()){
            return $this->redirect($this->generateUrl('cabinet'));
        }

        /*$breadcrumbs = $this->get("white_october_breadcrumbs");
        $breadcrumbs->addItem("Главная", $this->get("router")->generate("homepage"));
        $breadcrumbs->addItem("Личный кабинет", $this->get("router")->generate("cabinet"));
        $breadcrumbs->addItem("Мои заказы");*/

        return [
        ];
    }

    /**
     * @Route("/registration/write/", name="registration_write")
     */
    public function indexWriteAction(Request $request)
    {

        $email = trim($request->get('email'));
        $nickname = trim($request->get('nickname'));
        $password = trim($request->get('password'));
        $password_repeat = trim($request->get('password_repeat'));
        $user_agreement = trim($request->get('user_agreement', '0'));

        if($email == '' OR $nickname == '' OR $password == '' OR $password_repeat == ''){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Заполните все поля']);
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Введите правильный e-mail']);
        }

        if($password != $password_repeat){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Пароли не совпадают']);
        }

        if($user_agreement != '1'){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Примите условия']);
        }

        $em = $this->getDoctrine()->getManager();

        if($existUser = $em->getRepository('App:User')->findOneBy(["email"=>$email,'enabled'=>true])){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Данный e-mail зарегистрирован']);
        }

        if($existUser = $em->getRepository('App:User')->findOneBy(["nickname"=>$nickname,'enabled'=>true])){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Данный никнейм зарегистрирован']);
        }

        /*$recaptchaCode = $request->get('g-recaptcha-response');

        $recaptcha = new \ReCaptcha\ReCaptcha("6LdrISYUAAAAAFSRWvn-7n5-7A3SnwD15vF8bS21");
        $resp = $recaptcha->verify($recaptchaCode, $_SERVER['REMOTE_ADDR']);
        if (!$resp->isSuccess()) {
            if(count($resp->getErrorCodes()) > 0 ){
                return JsonResponse::create(["error"=>true, 'error_text'=>'Вы не прошли тест reCAPTCHA']);
            }
        }*/

        $user = new User();
        $user->setCreatedAt(new \DateTime());
        $user->setUpdatedAt(new \DateTime());

        $user->setEmail($email);
        $user->setNickname($nickname);
        $user->setPlainPassword($password);
        $user->setEnabled(true);

        $code = strtoupper(chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)) . chr(rand(65, 90)));
        $user->setEmailNeedCheck(true);
        $user->setEmailConfirmCode($code);

        $em->persist($user);
        $em->flush($user);

        $log = new ProductLog();
        $log->setText('user_registration');
        $log->setUser($user);
        $log->setDate(new \DateTime());
        $em->persist($log);
        $em->flush($log);

        $SPApiProxy = new SendpulseApi( getenv('sendpulse_client_id'), getenv('sendpulse_client_secret'), 'file' );
        $SPApiProxy->addEmails(getenv('sendpulse_book_registration'),[["email"=>$email]]);

        try {
            $this->loginManager->loginUser(
                $this->container->getParameter('fos_user.firewall_name'),
                $user);
        } catch (AccountStatusException $ex) {
            return JsonResponse::create(["error" => true, "error_text" => 'Регистрация на данный моммент недоступна']);
        }

        $this->get('wp.notify.manager')->sendRegistrationEmail($user, $password, $code);

        return JsonResponse::create(["error"=>false]);
    }

    /**
     * @Route("/registration/confirm/{code}/", name="registration_confirm")
     * @Template()
     */
    public function confirmAction(Request $request, $code)
    {
        $em = $this->getDoctrine()->getManager();

        $user = $em->getRepository('App:User')->findOneBy(["code"=>$code, "emailConfirm"=>false, "emailNeedCheck"=>true]);

        if($user){
            $user->setEmailConfirm(true);
            $em->flush($user);
        }

        return [
            "user"=>$user
        ];
    }
}
