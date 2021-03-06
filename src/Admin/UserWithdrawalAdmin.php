<?php

namespace App\Admin;

use App\Entity\PaymentLog;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;

class UserWithdrawalAdmin extends AbstractAdmin
{

    public function configureFormFields(FormMapper $formMapper)
    {

        $entity = $this->getSubject();

        $info = $this->getConfigurationPool()->getContainer()->get('twig')->render('admin/_withdrawal_info.html.twig', ["entity"=>$entity]);

        $formMapper
            ->add('price', 'text',
                array(
                    'label' => 'Информация',
                    'required' => false,
                    'attr' => ["style" => "display:none;"],
                    'help'=>$info
                )
            )
            ->add('status', 'choice', array(
                'choices' => array(
                    'new' => "Новая",
                    'rejected' => "Отклонено",
                    'done' => "Выполнено"
                ),
                'multiple' => false,
                'expanded' => false,
                'label' => 'Статус'
            ));
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->add('id')
            ->addIdentifier('nameAdmin', null, array('label' => 'Номер заявки'))
            ->add('date', null, array('label' => 'Дата'))
            ->add('status', 'choice', array(
                'choices' => array(
                    'new' => "Новая",
                    'rejected' => "Отклонено",
                    'done' => "Выполнено"
                ),
                'label' => 'Статус'
            ));
    }

    public function postUpdate($object)
    {
        //$this->fos_manager->updatePassword($object);
        if ($object->getStatus() == 'done') {
            $em = $this->getConfigurationPool()->getContainer()->get('doctrine.orm.entity_manager');
            $user = $object->getUser();
            $price = $object->getPrice();

            $transaction = new PaymentLog();
            $transaction->setDate(new \DateTime());
            $transaction->setUser($user);
            $transaction->setPrice(-1 * $price);
            $transaction->setName('Вывод денег по заявке №"' . $object->getId() . '"');
            $transaction->setType('withdrawal');

            $em->persist($transaction);
            $em->flush($transaction);

            $balance = 0;
            $payments = $em->getRepository('App:PaymentLog')->findBy(["user" => $user]);
            foreach ($payments as $e) {
                $balance += $e->getPrice();
            }

            $user->setBalance($balance);
            $em->flush($user);

        }

    }


    public function configureDatagridFilters(DatagridMapper $datagridMapper)
    {

    }

    public function getExportFields()
    {
        return array('email', 'username');
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('create')->remove('delete');
    }
}
