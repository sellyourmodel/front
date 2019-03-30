<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class SettingEmailAdmin extends Admin
{
    protected $baseRouteName = 'admin_settings_email';
    protected $baseRoutePattern = 'settings_email';

    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('emailSender', null, array('label' => 'Имя отправителя', 'required' => true))
            ->add('emailEmail', null, array('label' => 'E-mail отправителя', 'required' => true))
            ->add('emailAdmin', null, array('label' => 'E-mail для приема заказов и сообщений с сайта', 'required' => true))
        ;
    }

}
