<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class SubscribeAdmin extends Admin
{

    protected $datagridValues = array(
        '_page' => 1,
        '_sort_order' => 'DESC', // sort direction
        '_sort_by' => 'date' // field name
    );

    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('email', null, array('label' => 'E-mail', 'required' => true))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->add('email', null, array('label' => 'E-mail'))
            ->add('date', null, array('label' => 'Дата'))
        ;
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('edit')->remove('create')->remove('delete');
    }

}
