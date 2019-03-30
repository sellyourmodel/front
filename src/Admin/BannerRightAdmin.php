<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Route\RouteCollection;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class BannerRightAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('link', null, array('label' => 'Ссылка', 'required' => false))
            ->add('image', 'sonata_type_model_list', array('label' => 'Картинка (230x550)'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'informImageRight',
                    'provider' => 'sonata.media.provider.image'
                )))
            ->add('persent', null, array('label' => 'Процент показа', 'required' => false))
            ->add('active', null, array('label' => 'Активен', 'required' => false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('link', null, array('label' => 'Ссылка'))
            ->add('persent', null, array('label' => 'Процент показа'))
            ->add('active', null, array('label' => 'Активен'))
        ;
    }

}
