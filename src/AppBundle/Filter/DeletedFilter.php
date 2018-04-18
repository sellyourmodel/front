<?php
namespace AppBundle\Filter;

use Doctrine\ORM\Query\Filter\SQLFilter;
use Doctrine\ORM\Mapping\ClassMetaData;

class DeletedFilter extends SQLFilter {

    public function addFilterConstraint(ClassMetadata $target, $alias)
    {
        $filter =
            ($target->reflClass->getName() == 'AppBundle\Entity\Product') ?
                $alias . '.deleted = 0' : '';

        return $filter;
    }
}