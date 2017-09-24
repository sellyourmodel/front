<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccountStatusException;

class  RegistrationController extends Controller
{
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

        if($email == '' OR $nickname == '' OR $password == '' OR $password_repeat == ''){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Заполните все поля']);
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Введите правильный e-mail']);
        }

        if($password != $password_repeat){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Пароли не совпадают']);
        }

        $em = $this->getDoctrine()->getManager();

        if($existUser = $em->getRepository('AppBundle:User')->findOneBy(["email"=>$email,'enabled'=>true])){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Данный e-mail зарегистрирован']);
        }

        if($existUser = $em->getRepository('AppBundle:User')->findOneBy(["nickname"=>$nickname,'enabled'=>true])){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Данный никнейм зарегистрирован']);
        }

        $recaptchaCode = $request->get('g-recaptcha-response');

        $recaptcha = new \ReCaptcha\ReCaptcha("6LdrISYUAAAAAFSRWvn-7n5-7A3SnwD15vF8bS21");
        $resp = $recaptcha->verify($recaptchaCode, $_SERVER['REMOTE_ADDR']);
        if (!$resp->isSuccess()) {
            if(count($resp->getErrorCodes()) > 0 ){
                return JsonResponse::create(["error"=>true, 'error_text'=>'Вы не прошли тест reCAPTCHA']);
            }
        }

        $user = new User();

        $user->setEmail($email);
        $user->setNickname($nickname);
        $user->setPlainPassword($password);
        $user->setEnabled(true);

        $em->persist($user);
        $em->flush($user);

        try {
            $this->container->get('fos_user.security.login_manager')->loginUser(
                $this->container->getParameter('fos_user.firewall_name'),
                $user);
        } catch (AccountStatusException $ex) {
            return JsonResponse::create(["error" => true, "error_text" => 'Регистрация на данный моммент недоступна']);
        }

        /*$settings = $this->getDoctrine()->getRepository('WPAppBundle:Settings')->findOneBy([]);

        if ($settings AND $settings->getEmailFeedback()) {
            $message = \Swift_Message::newInstance()
                ->setContentType("text/html")
                ->setSubject('Новое сообщение с формы обратной связи Element78')
                ->setTo($settings->getEmailFeedback())
                ->setFrom("element78@web-premier.ru")
                ->setBody($this->get('templating')->render('WPAppBundle:Mail:feedback.html.twig', array(
                    'name' => $name,
                    'contacts' => $contacts,
                    'text' => $text
                )), 'text/html');

            $this->get('mailer')->send($message);
        }*/

        return JsonResponse::create(["error"=>false]);
    }
}
