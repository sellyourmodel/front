<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Cookie;
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
            "products"=>$this->getDoctrine()->getRepository('App:Product')->getNew(5),
            "productsBest"=>$this->getDoctrine()->getRepository('App:Product')->getBest(5),
            "slider"=>$this->getDoctrine()->getRepository('App:Slider')->findBy(["active"=>true],["pos"=>"ASC"]),
            "banners"=>$this->getDoctrine()->getRepository('App:BannerIndex')->findBy([],["id"=>"ASC"])
        ];
    }

    /**
     * @Route("/cookie/agree/", name="cookie_agree", options={"expose"=true})
     */
    public function cookieAgreeAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $cookie = new Cookie('cookieAgree', 'true');

        $response = new JsonResponse();
        $response->headers->setCookie($cookie);
        $response->setData(["error" => false]);

        return $response;
    }
}
