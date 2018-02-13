<?php
namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class SliderAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('pos', null, array('label' => 'Позиция', 'required' => true))
            ->add('line1', null, array('label' => 'Строка 1', 'required' => false))
            ->add('line2', null, array('label' => 'Строка 2', 'required' => false))
            ->add('line3', null, array('label' => 'Строка 3', 'required' => false))
            ->add('line4', null, array('label' => 'Строка 4', 'required' => false))
            ->add('link', null, array('label' => 'Ссылка', 'required' => false))
            ->add('image', 'sonata_type_model_list', array('label' => 'Картинка'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'slider',
                    'provider' => 'sonata.media.provider.image'
                )))
            ->add('active', null, array('label' => 'Активно', 'required' => false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('pos', null, array('label' => 'Позиция'))
            ->add('link', null, array('label' => 'Ссылка'))
            ->add('active', null, array('label' => 'Активно'))
        ;
    }

}
