<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Template()
     */
    public function indexAction(Request $request)
    {
        return [
            "products"=>$this->getDoctrine()->getRepository('AppBundle:Product')->getNew(5),
            "productsBest"=>$this->getDoctrine()->getRepository('AppBundle:Product')->getBest(5),
            "slider"=>$this->getDoctrine()->getRepository('AppBundle:Slider')->findBy(["active"=>true],["pos"=>"ASC"]),
            "banners"=>$this->getDoctrine()->getRepository('AppBundle:BannerIndex')->findBy([],["id"=>"ASC"])
        ];
    }
}
