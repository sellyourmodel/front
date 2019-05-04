<?php

namespace App\Controller;

use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sonata\AdminBundle\Exception\ModelManagerException;
use Symfony\Component\HttpFoundation\Request;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Admin\BaseFieldDescription;
use Sonata\AdminBundle\Util\AdminObjectAclData;
use Sonata\AdminBundle\Admin\AdminInterface;
use Psr\Log\NullLogger;

class AdminEditController extends CRUDController
{

    public function listAction(Request $request = null)
    {
        $criteria = [];

    	$object = $this->container->get('doctrine')->getRepository($this->admin->getClass())->findOneBy($criteria);

        if (!$object) {
            throw new NotFoundHttpException('unable to find any objects');
        }

        $id = $object->getId();

        return $this->redirect($this->admin->generateUrl('edit', array('id' => $id)));
    }

}
