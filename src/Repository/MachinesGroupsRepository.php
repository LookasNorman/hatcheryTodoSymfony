<?php

namespace App\Repository;

use App\Entity\MachinesGroups;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MachinesGroups|null find($id, $lockMode = null, $lockVersion = null)
 * @method MachinesGroups|null findOneBy(array $criteria, array $orderBy = null)
 * @method MachinesGroups[]    findAll()
 * @method MachinesGroups[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MachinesGroupsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MachinesGroups::class);
    }

    // /**
    //  * @return MachinesGroups[] Returns an array of MachinesGroups objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MachinesGroups
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
