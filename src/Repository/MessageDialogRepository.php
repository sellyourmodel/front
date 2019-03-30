<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\ORM\EntityRepository;

/**
 * MessageDialogRepository
 */
class MessageDialogRepository extends EntityRepository
{
    /**
     * @return array
     */
    public function findForUser($user)
    {

        $qb = $this->createQueryBuilder('p')
            ->select('p');

        $qb->andWhere('p.from = :user OR p.to = :user')
            ->setParameter('user', $user);

        $qb->addOrderBy('p.date','DESC');

        return $qb->getQuery()
            ->getResult();
    }

}
