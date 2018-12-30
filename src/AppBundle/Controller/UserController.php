<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
use AppBundle\Entity\ProductImage;
use AppBundle\Entity\Tag;
use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccountStatusException;
use Application\Sonata\MediaBundle\Entity\Media;

class  UserController extends Controller
{
    /**
     * @Route("/user/{nickname}/", name="user_view")
     * @Template()
     */
    public function viewAction(Request $request, $nickname)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('AppBundle:User')->findOneBy(['nickname'=>$nickname, "enabled"=>true]);

        if(!$entity){
            throw $this->createNotFoundException('User not found');
        }

        return [
            "entity"=>$entity,
            "products"=>$em->getRepository('AppBundle:Product')->findBy(["user"=>$entity, "moderated"=>true],["date"=>"DESC"]),
            "withdrawals"=>$em->getRepository('AppBundle:UserWithdrawal')->findBy(["user"=>$entity],["date"=>"DESC"]),
            "history"=>$em->getRepository('AppBundle:PaymentLog')->findBy(["user"=>$entity],["date"=>"DESC"]),
            "favorites"=>$em->getRepository('AppBundle:ProductFavorite')->getMyFavorites($entity),
            "buy"=>$em->getRepository('AppBundle:Buy')->getMyBuy($entity)
        ];
    }

    /**
     * @Route("/user/{nickname}/stats/", name="user_view_stats")
     * @Template()
     */
    public function viewStatsAction(Request $request, $nickname)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->getUser()){
            throw $this->createNotFoundException('User not found');
        }

        $entity = $em->getRepository('AppBundle:User')->findOneBy(['nickname'=>$nickname, "enabled"=>true]);

        if(!$entity){
            throw $this->createNotFoundException('User not found');
        }

        if($entity->getId() != $this->getUser()->getId()){
            throw $this->createNotFoundException('User not found');
        }

        return [
            "entity"=>$entity,
            "lastWithdrawal"=>$em->getRepository('AppBundle:UserWithdrawal')->findOneBy(["user"=>$entity, "status"=>"done"],["date"=>"DESC"], 1),
            "history"=>$em->getRepository('AppBundle:PaymentLog')->findBy(["user"=>$entity],["date"=>"DESC"])
        ];
    }


    /**
     * @Route("/user/{nickname}/stats/transactions/", name="user_view_stats_transactions")
     * @Template()
     */
    public function viewStatsTransactionsAction(Request $request, $nickname)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->getUser()){
            throw $this->createNotFoundException('User not found');
        }

        $entity = $em->getRepository('AppBundle:User')->findOneBy(['nickname'=>$nickname, "enabled"=>true]);

        if(!$entity){
            throw $this->createNotFoundException('User not found');
        }

        if($entity->getId() != $this->getUser()->getId()){
            throw $this->createNotFoundException('User not found');
        }

        return [
            "entity"=>$entity,
            "history"=>$em->getRepository('AppBundle:PaymentLog')->findBy(["user"=>$entity],["date"=>"DESC"])
        ];
    }

    /**
     * @Route("/user/{nickname}/moderation/", name="user_view_moderation")
     * @Template()
     */
    public function viewModerationAction(Request $request, $nickname)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->getUser()){
            throw $this->createNotFoundException('User not found');
        }

        $entity = $em->getRepository('AppBundle:User')->findOneBy(['nickname'=>$nickname, "enabled"=>true]);

        if(!$entity){
            throw $this->createNotFoundException('User not found');
        }

        if($entity->getId() != $this->getUser()->getId()){
            throw $this->createNotFoundException('User not found');
        }

        return [
            "entity"=>$entity,
            "products"=>$em->getRepository('AppBundle:Product')->findBy(["user"=>$entity, "moderated"=>false],["date"=>"DESC"])
        ];
    }

    /**
     * @Route("/myprofile/withdrawals/", name="myprofile_withdrawals")
     * @Template()
     */
    public function withdrawalsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->getUser()){
            throw $this->createNotFoundException('User not found');
        }

        $entity = $this->getUser();

        return [
            "entity"=>$entity,
            "methods"=>$em->getRepository('AppBundle:UserWithdrawalMethod')->findBy([],["id"=>"ASC"]),
            "withdrawals"=>$em->getRepository('AppBundle:UserWithdrawal')->findBy(["user"=>$entity],["date"=>"DESC"])
        ];
    }

}
