<?php
namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class BannerAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('name2', null, array('label' => 'Подпись', 'required' => true))
            ->add('link', null, array('label' => 'Ссылка', 'required' => false))
            ->add('image', 'sonata_type_model_list', array('label' => 'Картинка (367x232)'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'informImage',
                    'provider' => 'sonata.media.provider.image'
                )))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('link', null, array('label' => 'Ссылка'))
        ;
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('create')->remove('delete');
    }

}
