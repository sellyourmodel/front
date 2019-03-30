<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;

class NewsAdmin extends Admin
{

    protected $datagridValues = array(
        '_page' => 1,
        '_sort_order' => 'DESC', // sort direction
        '_sort_by' => 'date' // field name
    );

    public function configureFormFields(FormMapper $formMapper)
    {

        $subject = $this->getSubject();

        if(!$subject->getId()){
            $subject->setDate(new \DateTime());
        }

        $formMapper
            ->add('name', null, array('label' => 'Название', 'required' => true))
            ->add('date', 'sonata_type_date_picker', array('label' => 'Дата','format'=> 'dd.MM.yyyy', 'required' => true))
            ->add('image', 'sonata_type_model_list', array('label' => 'Картинка'), array(
                'link_parameters' => array(
                    'hide_context' => true,
                    'context' => 'news',
                    'provider' => 'sonata.media.provider.image'
                )))
            ->add('preview', null, array('label' => 'Вступительный текст', 'required' => false, 'attr'=> ["style"=>"height:100px;"]))
            ->add('text', null, array('label' => 'Полный текст', 'required' => false, 'attr'=> ['class' => 'tinymce','data-theme' => 'advanced']))
            ->add('active', null, array('label' => 'Активно', 'required' => false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('date', null, array('label' => 'Дата'))
            ->add('active', null, array('label' => 'Активно'))
        ;
    }

}
