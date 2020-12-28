<?php

namespace App\Repository;

use App\Entity\ObjectAddress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ObjectAddress|null find($id, $lockMode = null, $lockVersion = null)
 * @method ObjectAddress|null findOneBy(array $criteria, array $orderBy = null)
 * @method ObjectAddress[]    findAll()
 * @method ObjectAddress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ObjectAddressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ObjectAddress::class);
    }

    // /**
    //  * @return ObjectAddress[] Returns an array of ObjectAddress objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ObjectAddress
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
