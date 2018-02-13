<?php
namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class RightTextBlockAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('text', 'textarea', array('label' => 'Текст RU','attr' => array('class' => 'tinymce','data-theme' => 'advanced'), 'required'=>false))
            ->add('textEn', 'textarea', array('label' => 'Текст EN','attr' => array('class' => 'tinymce','data-theme' => 'advanced'), 'required'=>false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
        ;
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('create')->remove('delete');
    }

}
