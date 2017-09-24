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
        $password = trim($request->get('password'));
        $password_repeat = trim($request->get('password_repeat'));

        if($email == '' OR $password == '' OR $password_repeat == ''){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Заполните вся поля']);
        }

        if($password != $password_repeat){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Введенные пароли не совпадают']);
        }

        $em = $this->getDoctrine()->getManager();

        if($existUser = $em->getRepository('AppBundle:User')->findOneBy(["email"=>$email,'enabled'=>true])){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Пользователь с данным e-mail уже существует']);
        }

        $user = new User();

        $user->setEmail($email);
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
