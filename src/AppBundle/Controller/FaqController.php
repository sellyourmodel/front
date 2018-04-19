<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FaqController extends Controller
{
    /**
     * @Route("/faq/", name="faq", options={"expose"=true})
     * @Template()
     */
    public function indexAction(Request $request)
    {
        return [
            "entities"=>$this->getDoctrine()->getRepository('AppBundle:Faq')->findBy(["active"=>true], ["pos"=>"ASC"])
        ];
    }
}
