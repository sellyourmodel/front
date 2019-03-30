<?php
namespace App\Admin;

use FOS\UserBundle\Model\UserManagerInterface;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use App\Form\Extension\ChoiceList\UserRoles as UserRoles;

class UserAdmin extends AbstractAdmin
{

    private $fos_manager;

    public function setUserManager (UserManagerInterface $manager) {

        $this->fos_manager = $manager;
    }

    public function configureFormFields(FormMapper $formMapper)
    {

        $subject = $this->getSubject();

        $formMapper
            ->add('f', null, array('label' => 'Фамилия'))
            ->add('i', null, array('label' => 'Имя'))
            ->add('o', null, array('label' => 'Отчество'))
        ;

        $formMapper
            ->add('nickname', null, array('label' => 'Ник', 'required' => true))
            ->add('email', null, array('label' => 'E-mail', 'required' => true))
            ->add('plainPassword', 'text', array('label' => 'Пароль', 'required' => false))
            ->add('roles', 'choice', array(
                'choices' => array(
                    'ROLE_SUPER_ADMIN' => "Администратор",
                    'ROLE_USER' => "Пользователь",
                ),
                'multiple' => true,
                'expanded' => true,
                'label' => 'Роли'
            ))
            ->add('enabled', null, array('label' => 'Активен', 'required' => false))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->add('id')
            ->addIdentifier('email', null, array('label' => 'E-mail'))
            ->add('name', null, array('label' => 'Имя'))
            ->add('roleName', null, array('label' => 'Роль'))
            ->add('enabled', null, array('label' => 'Активен'))
        ;
    }

    public function preUpdate($object)
    {
        $this->fos_manager->updatePassword($object);
    }

    public function prePersist($object)
    {
        $object->setSuperAdmin(true);
        $this->fos_manager->updatePassword($object);
    }

    public function configureDatagridFilters(DatagridMapper $datagridMapper)
    {

    }

    public function getExportFields()
    {
        return array('email', 'username');
    }
}
