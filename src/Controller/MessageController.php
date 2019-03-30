<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\MessageDialog;
use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class  MessageController extends Controller
{
    /**
     * @Route("/messages/", name="messages")
     * @Template()
     */
    public function messagesAction(Request $request)
    {

        $entities = $this->getDoctrine()->getRepository('App:MessageDialog')->findForUser($this->getUser());
        //$messages = $this->_getMessagesHtml($entities);

        return [
            "messages"=>$entities
        ];
    }

    /**
     * @Route("/messages/{id}/", name="messages_dialog")
     * @Template()
     */
    public function messagesDialogAction(Request $request, $id)
    {
        if($this->getUser()->getId() == $id){
            return $this->redirectToRoute('messages');
        }

        $user2 = $this->getDoctrine()->getRepository('App:User')->find($id);

        if(!$user2){
            throw $this->createNotFoundException('User not found');
        }

        $entities = $this->getDoctrine()->getRepository('App:Message')->findForUserDialog($this->getUser(), $user2);
        $messages = $this->_getMessagesHtml($entities);

        $em = $this->getDoctrine()->getManager();

        $messagesUnRead = $em->getRepository('App:Message')->findBy(["to"=>$this->getUser(), 'isRead'=>false]);
        /** @var Message $e */
        foreach ($messagesUnRead as $e){
            $e->setIsRead(true);
            $em->flush($e);
        }

        return [
            "user"=>$user2,
            "messages"=>$messages
        ];
    }

    /**
     * @Route("/messages/{id}/write/", name="messages_dialog_write", options={"expose"=true})
     */
    public function messagesDialogWriteAction(Request $request ,$id)
    {

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        $entity = $this->getDoctrine()->getRepository('App:User')->findOneBy(['id' => $id]);

        if (!$entity) {
            return JsonResponse::create(["error" => true, 'error_text' => 'Пользователь не найден']);
        }

        $text = $request->get('text');
        $text = trim($text);
        if(!$text){
            return JsonResponse::create(["error" => true, 'error_text' => 'Введите текст сообщения']);
        }

        $message = new Message();
        $message->setDate(new \DateTime());
        $message->setText($text);
        $message->setFrom($user);
        $message->setTo($entity);
        $em->persist($message);
        $em->flush($message);

        $dialogTest1 = $em->getRepository('App:MessageDialog')->findOneBy(["from"=>$user, "to"=>$entity]);
        $dialogTest2 = $em->getRepository('App:MessageDialog')->findOneBy(["from"=>$entity, "to"=>$user]);
        if($dialogTest1){
            $dialogTest1->setDate(new \DateTime());
            $dialogTest1->setFrom($user);
            $dialogTest1->setTo($entity);
            $dialogTest1->setText($text);
            $em->flush($dialogTest1);
        }
        elseif($dialogTest2){
            $dialogTest2->setDate(new \DateTime());
            $dialogTest2->setFrom($user);
            $dialogTest2->setTo($entity);
            $dialogTest2->setText($text);
            $em->flush($dialogTest2);
        }else{
            $dialog = new MessageDialog();
            $dialog->setDate(new \DateTime());
            $dialog->setFrom($user);
            $dialog->setTo($entity);
            $dialog->setText($text);

            $em->persist($dialog);
            $em->flush($dialog);
        }

        $this->get('wp.notify.manager')->sendNewMessageEmail($message);

        $entities = $this->getDoctrine()->getRepository('App:Message')->findForUserDialog($this->getUser(), $entity);
        $messages = $this->_getMessagesHtml($entities);

        return JsonResponse::create(["error" => false, 'html' => $messages]);
    }

    private function _getMessagesHtml($entities)
    {

        $html = $this->get('templating')->render("message/_messages_list.html.twig", [
            "entities" => $entities
        ]);

        return $html;
    }

}
