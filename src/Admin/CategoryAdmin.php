<?php
namespace App\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;

use Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class CategoryAdmin extends Admin
{
    public function configureFormFields(FormMapper $formMapper)
    {

        $formMapper
            ->add('name', null, array('label' => 'Название (ru)'))
            ->add('nameEn', null, array('label' => 'Название (en)'))
            ->add('parent', null, array('label' => 'Родитель'))
            ->add('colNumber', ChoiceType::class, array('choices'=>["0","1","2","3","4","5"],'label' => 'Номер колонки (для корневых разделов)'))
            ->add('pos', null, array('label' => 'Позиция'))
            ->add('text', null, array('label' => 'Текст', 'required' => false, 'attr'=> ['class' => 'tinymce','data-theme' => 'advanced']))
        ;
    }

    public function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array('label' => 'Название'))
            ->add('active', null, array('label' => 'Активно'))
        ;
    }

    public function prePersist($object)
    {
        $object->setAlias($this->_generateAlias($object->getName()));
    }

    private function _generateAlias($str) {
        $rus = array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я');
        $lat = array('A', 'B', 'V', 'G', 'D', 'E', 'E', 'Zh', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'C', 'Ch', 'Sh', 'Sch', 'Y', 'Y', 'Y', 'E', 'Yu', 'Ya', 'a', 'b', 'v', 'g', 'd', 'e', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', '', 'e', 'yu', 'ya');
        $str = str_replace($rus, $lat, mb_strtolower(trim($str)));
        $str = preg_replace('{[^a-z0-9-]}', '-', $str);
        $str = preg_replace('{-+}', '-', $str);
        $str = trim($str, '-');
        return $str;
    }

}
