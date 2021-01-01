<?php

namespace App\Repository;

use App\Entity\TodoType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TodoType|null find($id, $lockMode = null, $lockVersion = null)
 * @method TodoType|null findOneBy(array $criteria, array $orderBy = null)
 * @method TodoType[]    findAll()
 * @method TodoType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodoTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TodoType::class);
    }

    // /**
    //  * @return TodoType[] Returns an array of TodoType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TodoType
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
