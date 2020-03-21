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

class  LogController extends Controller
{

    /**
     * @Route("/cabinet/log/", name="cabinet_log", options={"expose"=true})
     * @Security("has_role('ROLE_TRACKER')")
     * @Template()
     */
    public function indexAction(Request $request)
    {

        $filter = [];
        if($request->get('action')){
            $filter["text"] = $request->get('action');
        }

        $paginator = $this->get('knp_paginator');

        $entities = $paginator->paginate(
            $this->getDoctrine()->getRepository('App:ProductLog')->findBy($filter, ["date" => "DESC"]),
            $request->query->getInt('page', 1),
            100
        );

        return [
            "entities" => $entities
        ];
    }

}
