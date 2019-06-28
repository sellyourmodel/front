<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class SettingSiteAdmin extends Admin
{
    protected $baseRouteName = 'admin_settings_email';
    protected $baseRoutePattern = 'settings_email';

    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('emailAdmin', null, array('label' => 'E-mail для приема заказов и сообщений с сайта', 'required' => true))
            ->add('modelPrice', null, array('label' => 'Цена 1-й модели (руб.)', 'required' => true))
            ->add('loadModelPrice', null, array('label' => 'Сумма зачисляемая автору после загрузки модели (руб.)', 'required' => true))
        ;
    }

}
