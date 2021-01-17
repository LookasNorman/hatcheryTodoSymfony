<?php

namespace App\Repository;

use App\Entity\Todo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Todo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Todo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Todo[]    findAll()
 * @method Todo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Todo::class);
    }

    public function todosOverdueByTypeObjectAddress($date, $objectAddress, $todoType)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.date < :date')
            ->andWhere('t.objectAddress = :objectAddress')
            ->andWhere('t.type = :type')
            ->andWhere('t.endDate IS NULL')
            ->setParameters([
                'date' => $date,
                'objectAddress' => $objectAddress,
                'type' => $todoType
            ])
            ->getQuery()
            ->getArrayResult()
            ;
    }

    public function todosTodayByTypeObjectAddress($date, $objectAddress, $todoType)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.date = :date')
            ->andWhere('t.objectAddress = :objectAddress')
            ->andWhere('t.type = :type')
            ->andWhere('t.endDate IS NULL')
            ->setParameters([
                'date' => $date,
                'objectAddress' => $objectAddress,
                'type' => $todoType
            ])
            ->getQuery()
            ->getArrayResult()
            ;
    }

    public function todosNextByTypeObjectAddress($date, $objectAddress, $todoType)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.date > :date')
            ->andWhere('t.objectAddress = :objectAddress')
            ->andWhere('t.type = :type')
            ->andWhere('t.endDate IS NULL')
            ->setParameters([
                'date' => $date,
                'objectAddress' => $objectAddress,
                'type' => $todoType
            ])
            ->getQuery()
            ->getArrayResult()
            ;
    }

    public function todosByObjectAndType($objectAddress, $type)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.objectAddress = :objectAddress')
            ->andWhere('t.type = :type')
            ->andWhere('t.endDate IS NULL')
            ->setParameters([
                'objectAddress' => $objectAddress,
                'type' => $type
            ])
            ->getQuery()
            ->getArrayResult()
            ;
    }

    // /**
    //  * @return Todo[] Returns an array of Todo objects
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
    public function findOneBySomeField($value): ?Todo
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
