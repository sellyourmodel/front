<?php

namespace App\Controller;

use App\Entity\PaymentLog;
use App\Entity\PaymentOrder;
use App\Entity\ProductLog;
use App\Entity\ProductResponse;
use App\Entity\Ticket;
use App\Entity\TicketComment;
use App\Entity\TicketLog;
use App\Entity\TrackerTask;
use App\Entity\TrackerTaskComment;
use App\Entity\TrackerTaskLog;
use App\Entity\UserWithdrawal;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class  TrackerController extends Controller
{

    /**
     * @Route("/cabinet/tracker/", name="cabinet_tracker", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     * @Template()
     */
    public function trackerAction(Request $request)
    {

        $filter = [];

        return [
            "entities" => $this->getDoctrine()->getRepository('App:TrackerTask')->findBy($filter, ["dateUpdate" => "DESC"])
        ];
    }

    /**
     * @Route("/cabinet/tracker/add/", name="cabinet_tracker_add", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     * @Template()
     */
    public function trackerAddAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $users = $em->getRepository('App:User')->findAdmins();

        return [
            "users"=>$users
        ];
    }

    /**
     * @Route("/cabinet/tracker/add/write/", name="cabinet_tracker_add_write")
     * @Security("has_role('ROLE_TRACKER')")
     */
    public function trackerAddWriteAction(Request $request)
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
            $product = $em->getRepository('App:Product')->find($productId);
        }

        $user = $this->getUser();

        $name = trim($request->get('name'));
        $responsible = intval($request->get('responsible'));
        $watchers = [];
        $watchersRaw = $request->get('watchers');
        if(is_array($watchersRaw)){
            foreach ($watchersRaw as $e){
                $e = intval($e);
                if($e){
                    $watchers[] = $e;
                }
            }
        }
        $text = trim($request->get('text'));

        if (!$name or !$text or !$responsible) {
            return $returnError('Заполните все поля', 'email');
        }

        $responsibleUser = $em->getRepository('App:User')->find($responsible);
        if(!$responsibleUser){
            return $returnError('Ответственный не найден', 'email');
        }

        $entity = new TrackerTask();
        $entity->setStatus('new');
        $entity->setUser($user);
        $entity->setResponsible($responsibleUser);
        if(count($watchers)>0){
            $entity->setWatchers($watchers);
        }
        $entity->setDate(new \DateTime());
        $entity->setDateUpdate(new \DateTime());
        $entity->setName($name);
        $entity->setText($text);

        $em->persist($entity);
        $em->flush($entity);

        $log = new TrackerTaskLog();
        $log->setTicket($entity);
        $log->setUser($this->getUser());
        $log->setDate(new \DateTime());
        $log->setText('Задача создана');

        $em->persist($log);
        $em->flush($log);

        $this->get('wp.notify.manager')->sendTrackerNewTaskEmail($responsibleUser, $entity);
        if(count($watchers)>0){
            foreach ($watchers as $e){
                $watcher = $em->getRepository('App:User')->find($e);
                if($watcher){
                    $this->get('wp.notify.manager')->sendTrackerNewTaskEmail($watcher, $entity);
                }
            }
        }



        return JsonResponse::create(["error" => false, "url" => $this->generateUrl('cabinet_tracker_item', ["id" => $entity->getId()])]);
    }

    /**
     * @Route("/cabinet/tracker/{id}/", name="cabinet_tracker_item", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     * @Template()
     */
    public function trackerItemAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('App:TrackerTask')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Ticket not found');
        }

        $watchersUsers = [];
        if(is_array($entity->getWatchers())){
            $watchers = $entity->getWatchers();
            if(count($watchers)>0){
                foreach ($watchers as $e){
                    $watcher = $em->getRepository('App:User')->find($e);
                    if($watcher){
                        $watchersUsers[] = $watcher;
                    }
                }
            }
        }

        return [
            "entity" => $entity,
            "watchers" => $watchersUsers,
            "comments" => $this->getDoctrine()->getRepository('App:TrackerTaskComment')->findBy(["ticket" => $entity], ["date" => "DESC"]),
            "logs" => $this->getDoctrine()->getRepository('App:TrackerTaskLog')->findBy(["ticket" => $entity], ["date" => "DESC"])
        ];
    }

    /**
     * @Route("/cabinet/tracker/{id}/comment/write/", name="cabinet_tracker_item_comment_write", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     */
    public function trackerItemCommentWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $entity = $this->getDoctrine()->getRepository('App:TrackerTask')->find($id);

        if (!$entity) {
            return $returnError('Ticket not found');
        }

        $text = trim($request->get('text', 'text'));

        if ($text == '') {
            return $returnError('Напишите комментарий', 'email');
        }

        $comment = new TrackerTaskComment();
        $comment->setTicket($entity);
        $comment->setUser($this->getUser());
        $comment->setDate(new \DateTime());
        $comment->setText($text);

        $em->persist($comment);
        $em->flush($comment);

        $entity->setDateUpdate(new \DateTime());
        $em->flush($entity);

        $this->get('wp.notify.manager')->sendTrackerNewCommentEmail($entity->getResponsible(), $comment);
        $watchers = $entity->getWatchers();
        if(!is_array($watchers)){
            $watchers = [];
        }
        if(count($watchers)>0){
            foreach ($watchers as $e){
                $watcher = $em->getRepository('App:User')->find($e);
                if($watcher){
                    $this->get('wp.notify.manager')->sendTrackerNewCommentEmail($watcher, $comment);
                }
            }
        }

        $comments = $em->getRepository('App:TrackerTaskComment')->findBy(["ticket" => $entity], ["date" => "ASC"]);

        $responseData = [];
        $responseData["comments"] = $comments;

        $html = $this->renderView('tracker/_tracker_comments.html.twig', $responseData);

        return JsonResponse::create(["error" => false, 'html' => $html]);
    }

    /**
     * @Route("/cabinet/tracker/{id}/status/change/", name="cabinet_tracker_item_status_change", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     */
    public function trackerItemStatusChangeAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $entity = $this->getDoctrine()->getRepository('App:TrackerTask')->find($id);

        if (!$entity) {
            return $returnError('Ticket not found');
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

        $log = new TrackerTaskLog();
        $log->setTicket($entity);
        $log->setUser($this->getUser());
        $log->setDate(new \DateTime());
        $log->setText('Статус изменен на: '.$statusName);

        $em->persist($log);
        $em->flush($log);

        $watchersUsers = [];

        $this->get('wp.notify.manager')->sendTrackerChangeStatusEmail($entity->getResponsible(), $entity, $this->getUser());
        $watchers = $entity->getWatchers();
        if(!is_array($watchers)){
            $watchers = [];
        }
        if(count($watchers)>0){
            foreach ($watchers as $e){
                $watcher = $em->getRepository('App:User')->find($e);
                if($watcher){
                    $watchersUsers[] = $watcher;
                    $this->get('wp.notify.manager')->sendTrackerChangeStatusEmail($watcher, $entity, $this->getUser());
                }
            }
        }

        $responseData = [];
        $responseData["entity"] = $entity;
        $responseData["watchers"] = $watchersUsers;
        $responseData["logs"] = $this->getDoctrine()->getRepository('App:TrackerTaskLog')->findBy(["ticket" => $entity], ["date" => "DESC"]);

        $html = $this->renderView('tracker/_tracker_data.html.twig', $responseData);

        return JsonResponse::create(["error" => false, 'html' => $html]);
    }

}
