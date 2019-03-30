<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class FaqAdmin extends Admin
{

    protected $datagridValues = array(
        '_page' => 1,
        '_sort_order' => 'ASC', // sort direction
        '_sort_by' => 'pos' // field name
    );

    public function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('pos', null, array('label' => 'Позиция', 'required' => true))
            ->add('text', 'textarea', array('label' => 'Текст','attr' => array('class' => 'tinymce','data-theme' => 'advanced'), 'required'=>false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('pos', null, array('label' => 'Позиция'))
            ->add('active', null, array('label' => 'Активно'))
        ;
    }
}
