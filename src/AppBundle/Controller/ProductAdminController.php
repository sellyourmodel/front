<?php

namespace AppBundle\Controller;

use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sonata\AdminBundle\Exception\ModelManagerException;
use Symfony\Component\HttpFoundation\Request;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Admin\BaseFieldDescription;
use Sonata\AdminBundle\Util\AdminObjectAclData;
use Sonata\AdminBundle\Admin\AdminInterface;
use Psr\Log\NullLogger;

use AppBundle\Entity\Category;
use AppBundle\Entity\Product;


class ProductAdminController extends CRUDController
{

    /**
     * List action.
     *
     * @return Response
     *
     * @throws AccessDeniedException If access is not granted
     */
    public function listAction()
    {
        if (false === $this->admin->isGranted('LIST')) {
            throw new AccessDeniedException();
        }

        $datagrid = $this->admin->getDatagrid();
        $formView = $datagrid->getForm()->createView();

        $request = $this->get('request');
        $categoryId = $request->get('category',false);
        $filter = $request->get('filter',false);
        if(isset($filter["categoryArray"])){
            $categoryId = (int) $filter["categoryArray"]["value"];
        }

        if($categoryId){
            $datagrid->setValue('categoryArray',null,$categoryId);
        }
        else{
            $categoryId = false;
        }

        // set the theme for the current Admin Form
        $this->get('twig')->getExtension('form')->renderer->setTheme($formView, $this->admin->getFilterTheme());

        $categories = $this->getDoctrine()->getRepository('AppBundle:Category')->findBy(["parent"=>NULL],["pos"=>"ASC"]);

        return $this->render($this->admin->getTemplate('list'), array(
            'action'     => 'list',
            'form'       => $formView,
            'datagrid'   => $datagrid,
            'categories'   => $categories,
            'categoryId'   => $categoryId,
            'csrf_token' => $this->getCsrfToken('sonata.batch'),
        ));
    }

    /**
     * Redirect the user depend on this choice.
     *
     * @param object $object
     *
     * @return RedirectResponse
     */
    protected function redirectTo($object)
    {
        $request = $this->getRequest();

        if($object->getCategory()){
            $urlParams = ["category"=>$object->getCategory()->getId()];
        }
        else{
            $urlParams = [];
        }

        $url = false;

        if (null !== $request->get('btn_update_and_list')) {
            $url = $this->admin->generateUrl('list', $urlParams);
        }
        if (null !== $request->get('btn_create_and_list')) {
            $url = $this->admin->generateUrl('list', $urlParams);
        }

        if (null !== $request->get('btn_create_and_create')) {
            $params = array();
            if ($this->admin->hasActiveSubClass()) {
                $params['subclass'] = $request->get('subclass');
            }
            if($object->getCategory()){
                $params["category"] = $object->getCategory()->getId();
            }
            $url = $this->admin->generateUrl('create', $params);
        }

        if ($this->getRestMethod() === 'DELETE') {
            $url = $this->admin->generateUrl('list', $urlParams);
        }

        if (!$url) {
            foreach (array('edit', 'show') as $route) {
                if ($this->admin->hasRoute($route) && $this->admin->isGranted(strtoupper($route), $object)) {
                    $url = $this->admin->generateObjectUrl($route, $object);
                    break;
                }
            }
        }

        if (!$url) {
            $url = $this->admin->generateUrl('list');
        }

        return new RedirectResponse($url);
    }

    public function upAction(Request $request, $id)
    {
        if (false === $this->admin->isGranted('EDIT')) {
            throw new AccessDeniedException();
        }

        $id = $this->get('request')->get($this->admin->getIdParameter());
        $object = $this->admin->getObject($id);

        if($object){
            $upperObject = $this->getDoctrine()->getRepository('AppBundle:Product')->getUpperObject($object);
            if($upperObject){
                $newPos = $upperObject->getPos();
                $oldPos = $object->getPos();
                $object->setPos($newPos);
                $upperObject->setPos($oldPos);

                $this->getDoctrine()->getManager()->flush();
            }
        }


        return $this->redirect($request->headers->get('referer'));
    }

    public function downAction(Request $request, $id)
    {
        if (false === $this->admin->isGranted('EDIT')) {
            throw new AccessDeniedException();
        }

        $id = $this->get('request')->get($this->admin->getIdParameter());
        $object = $this->admin->getObject($id);

        if($object){
            $upperObject = $this->getDoctrine()->getRepository('AppBundle:Product')->getDownObject($object);
            if($upperObject){
                $newPos = $upperObject->getPos();
                $oldPos = $object->getPos();
                $object->setPos($newPos);
                $upperObject->setPos($oldPos);

                $this->getDoctrine()->getManager()->flush();
            }
        }

        return $this->redirect($request->headers->get('referer'));
    }

}
