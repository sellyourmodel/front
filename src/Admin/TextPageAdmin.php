<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class TextPageAdmin extends Admin
{
    protected $pageId;

    protected $baseRouteName = 'admin_unfinishedorders';
    protected $baseRoutePattern = 'unfinishedorders';

    public function setPageId($id){
        $this->pageId = $id;
        $this->baseRouteName = "admin_textpage".$id;
        $this->baseRoutePattern = "textpage".$id;
    }

    public function getPageId(){
        return $this->pageId;
    }

    public function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('text', 'textarea', array('label' => 'Текст','attr' => array('class' => 'tinymce','data-theme' => 'advanced'), 'required'=>false))
        ;
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('create')->remove('delete');
    }

}
