<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TextPageController extends Controller
{

    /**
     * @Template()
     */
    public function indexAction(Request $request)
    {

        $routeName = $request->get("_route");

        if(!strstr($routeName, 'page_')){
            return $this->createNotFoundException('Page not found');
        }

        $id = substr($routeName, 5);

        $page = $this->getDoctrine()->getRepository('AppBundle:TextPage')->find($id);

        if(!$page){
            return $this->createNotFoundException('Page not found');
        }

        $breadcrumbs = $this->get("white_october_breadcrumbs");
        $breadcrumbs->addItem("Главная", $this->get("router")->generate("homepage"));
        $breadcrumbs->addItem($page->getName());

        return [
            "page"=>$page,
        ];
    }
}
