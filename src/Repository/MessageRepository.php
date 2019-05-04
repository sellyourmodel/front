<?php

namespace App\Repository;

/**
 * MessageRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class MessageRepository extends \Doctrine\ORM\EntityRepository
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

    /**
     * @return array
     */
    public function findForUserDialog($user, $user2)
    {

        $qb = $this->createQueryBuilder('p')
            ->select('p');

        $qb->andWhere('(p.from = :user AND p.to = :user2) OR (p.from = :user2 AND p.to = :user)')
            ->setParameter('user', $user)
            ->setParameter('user2', $user2);

        $qb->addOrderBy('p.date','ASC');

        return $qb->getQuery()
            ->getResult();
    }

}