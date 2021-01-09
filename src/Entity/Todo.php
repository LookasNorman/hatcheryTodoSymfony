<?php

namespace App\Entity;

use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\ExistsFilter;

/**
 * @ApiResource(
 *     collectionOperations={
 *          "get",
 *          "post",
 *          "todos_overdue",
 *          "todos_today",
 *          "todos_next"
 *          "todos_object"
 *     }
 * )
 * @ApiFilter(DateFilter::class, properties={"date"})
 * @ApiFilter(SearchFilter::class, properties={"date", "objectAddress"})
 * @ApiFilter(ExistsFilter::class, properties={"endDate"})
 * @ORM\Entity(repositoryClass=TodoRepository::class)
 */
class Todo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $endDate;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="todos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $owner;

    /**
     * @ORM\ManyToOne(targetEntity=ObjectAddress::class, inversedBy="todos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $objectAddress;

    /**
     * @ORM\ManyToOne(targetEntity=Machines::class, inversedBy="todos")
     */
    private $machine;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $repeatTime;

    /**
     * @ORM\ManyToOne(targetEntity=TodoType::class, inversedBy="todos")
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDate(): string
    {
        return $this->date->format('Y-m-d');
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function getObjectAddress(): ?ObjectAddress
    {
        return $this->objectAddress;
    }

    public function setObjectAddress(?ObjectAddress $objectAddress): self
    {
        $this->objectAddress = $objectAddress;

        return $this;
    }

    public function getMachine(): ?Machines
    {
        return $this->machine;
    }

    public function setMachine(?Machines $machine): self
    {
        $this->machine = $machine;

        return $this;
    }

    public function getRepeatTime(): ?int
    {
        return $this->repeatTime;
    }

    public function setRepeatTime(?int $repeatTime): self
    {
        $this->repeatTime = $repeatTime;

        return $this;
    }

    public function getType(): ?TodoType
    {
        return $this->type;
    }

    public function setType(?TodoType $type): self
    {
        $this->type = $type;

        return $this;
    }
}
