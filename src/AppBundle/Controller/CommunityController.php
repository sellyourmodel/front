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

class  CommunityController extends Controller
{
    /**
     * @Route("/community/", name="community")
     * @Template()
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $entities = $em->getRepository('AppBundle:Article')->findBy(["active"=>true],["date"=>"DESC"], 1);

        return [
            "entities"=>$entities
        ];
    }
    /**
     * @Route("/community/articles/", name="articles")
     * @Template()
     */
    public function articlesAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $entities = $em->getRepository('AppBundle:Article')->findBy(["active"=>true],["date"=>"DESC"]);

        return [
            "entities"=>$entities
        ];
    }

    /**
     * @Route("/community/articles/{id}/", name="articles_item")
     * @Template()
     */
    public function articlesViewAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('AppBundle:Article')->findOneBy(['id'=>$id, "active"=>true]);

        $entity->setViews($entity->getViews()+1);
        $em->flush($entity);

        return [
            "entity"=>$entity
        ];
    }

}
