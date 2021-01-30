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

    public function todosOverdue($date)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.date < :date')
            ->andWhere('t.endDate IS NULL')
            ->setParameter(
                'date', $date
            )
            ->orderBy('t.date', 'ASC')
            ->getQuery()
            ->execute();
    }

    public function todosNext($date, $nextDate)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.date > :date')
            ->andWhere('t.date <= :nextDate')
            ->andWhere('t.endDate IS NULL')
            ->setParameters([
                'date' => $date,
                'nextDate' => $nextDate
            ])
            ->getQuery()
            ->getArrayResult();
    }

    public function machineTodosDone($machine)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.machine = :machine')
            ->andWhere('t.endDate IS NOT NULL')
            ->setParameter('machine', $machine)
            ->orderBy('t.date', 'ASC')
            ->getQuery()
            ->execute();
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
