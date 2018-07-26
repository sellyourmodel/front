<?php

namespace AppBundle\Repository;
use AppBundle\Entity\User;

/**
 * ProductCommentRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ProductCommentRepository extends \Doctrine\ORM\EntityRepository
{
    /**
     * Get comments for my models
     *
     * @return array
     */
    public function getMyProductComments(User $user)
    {
        $qb = $this->_baseQb();

        $qb
            ->andWhere('p.user = :user')
            ->setParameter('user', $user);

        $qb->orderBy('c.date', 'DESC');

        return $qb->getQuery()->getResult();
    }

    private function _baseQb()
    {
        $qb = $this->createQueryBuilder('c')
            ->innerJoin('c.product', 'p');

        $qb
            ->andWhere('p.active = true')
            ->andWhere('p.moderated = true')
            ->andWhere('p.deleted = false')
            ->andWhere('p.block = false')
        ;

        return $qb;
    }
}
