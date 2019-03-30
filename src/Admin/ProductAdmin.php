<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;
use Sonata\AdminBundle\Route\RouteCollection;

class ProductAdmin extends Admin
{
    protected $maxPerPage = 4096;
    protected $perPageOptions = array(4096);

    public function createQuery($context = 'list')
    {
        $qb = $this->getModelManager()->getEntityManager($this->getClass())->createQueryBuilder();

        $request = $this->getConfigurationPool()->getContainer()->get('request');
        $categoryId = $request->get('category',false);

        $filter = $request->get('filter',false);
        if(isset($filter["categoryArray"])){
            $categoryId = (int) $filter["categoryArray"]["value"];
        }

        if($request->isXmlHttpRequest() OR is_array($request->get('filter'))){
            $qb->select('p')
                ->from($this->getClass(), 'p');
            ;
        }
        else{

            if($categoryId){
                $category = $this->getConfigurationPool()->getContainer()->get('doctrine')->getRepository("App:Category")->find($categoryId);

                if($category){

                    $qb->select('p')
                        ->from($this->getClass(), 'p');

                    $qb->andWhere('p.category = :category')
                        ->setParameter('category', $category);

                }

            }
            else{
                $qb->select('p')
                    ->from($this->getClass(), 'p')
                    ->andWhere('p.category IS NULL');
                ;
            }

            $qb->addOrderBy('p.date','DESC');
        }

        $proxyQuery = new ProxyQuery($qb);
        return $proxyQuery;
    }

    public function configureFormFields(FormMapper $formMapper)
    {
        $request = $this->getConfigurationPool()->getContainer()->get('request');
        $categoryId = $request->get('category',false);

        if($categoryId){
            $category = $this->getConfigurationPool()->getContainer()->get('doctrine')->getRepository("App:Category")->find($categoryId);

            if($category){
                $entity = $this->getSubject();
                $entity->setCategory($category);
            }
        }

        $categoriesChoices = [];
        $categories = $this->getConfigurationPool()->getContainer()->get('doctrine')->getRepository("App:Category")->findBy(["parent"=>NULL],["pos"=>"ASC"]);

        foreach($categories as $e){
            $categoriesChoices[] = $e;

            if(count($e->getChildren())>0){
                foreach($e->getChildren() as $e2){
                    $categoriesChoices[] = $e2;
                }
            }
        }

        $formMapper
            ->with('Основные параметры',['class'=>''])
                ->add('name', null, array('label' => 'Название', 'required' => true))
                ->add('date', null, array('label' => 'Дата добавления', 'required' => false))
                ->add('category', null, array('choices' => $categoriesChoices ,'label' => 'Категория', 'required' => false))
                ->add('active', null, array('label' => 'Активно', 'required' => false))
            ->end()
            ->with('Описание товара',['class'=>''])
                ->add('image', 'sonata_type_model_list', array('label' => 'Картинка'), array(
                    'link_parameters' => array(
                        'hide_context' => true,
                        'context' => 'product',
                        'provider' => 'sonata.media.provider.image'
                    )))
                ->add(
                    'images', 'sonata_type_collection',
                    [
                        'label' => 'Дополнительные изображения',
                        'by_reference' => false,
                        'required' => false,
                        'type_options' => array(
                            'delete' => true
                        )
                    ], [
                        'edit' => 'inline',
                        'inline' => 'table',
                        'sortable' => 'pos'
                    ]
                )
                ->add('text', null, array('label' => 'Текстовое описание', 'required' => false, 'attr'=> ['class' => 'tinymce','data-theme' => 'advanced']))
            ->end()
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

    public function getBatchActions()
    {
        $actions = parent::getBatchActions();
        unset($actions['delete']);

        return $actions;
    }

}
