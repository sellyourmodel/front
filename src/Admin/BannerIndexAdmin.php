<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class BannerIndexAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('info', null, array('label' => 'Подпись', 'required' => true))
            ->add('icon', 'sonata_type_model_list', array('label' => 'Иконка'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'bannerIcon',
                    'provider' => 'sonata.media.provider.image'
                )))
            ->add('bg', 'sonata_type_model_list', array('label' => 'Фон (395×120)'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'bannerBg',
                    'provider' => 'sonata.media.provider.image'
                )))
            ->add('link', null, array('label' => 'Ссылка', 'required' => true))
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
