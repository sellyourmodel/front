<?php
namespace App\Filter;

use Doctrine\ORM\Query\Filter\SQLFilter;
use Doctrine\ORM\Mapping\ClassMetaData;

class DeletedFilter extends SQLFilter {

    public function addFilterConstraint(ClassMetadata $target, $alias)
    {
        $filter =
            ($target->reflClass->getName() == 'App\Entity\Product') ?
                $alias . '.deleted = 0' : '';

        return $filter;
    }
}