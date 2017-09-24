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
            "products"=>$em->getRepository('AppBundle:Product')->findBy(["user"=>$entity],["date"=>"DESC"]),
            "withdrawals"=>$em->getRepository('AppBundle:UserWithdrawal')->findBy(["user"=>$entity],["date"=>"DESC"]),
            "history"=>$em->getRepository('AppBundle:PaymentLog')->findBy(["user"=>$entity],["date"=>"DESC"]),
            "favorites"=>$em->getRepository('AppBundle:ProductFavorite')->findBy(["user"=>$entity],["id"=>"DESC"]),
            "buy"=>$em->getRepository('AppBundle:Buy')->findBy(["user"=>$entity],["date"=>"DESC"])
        ];
    }

}
