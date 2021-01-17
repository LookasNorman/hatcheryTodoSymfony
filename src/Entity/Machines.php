<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MachinesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(normalizationContext={"jsonld_embed_context"=true})
 * @ORM\Entity(repositoryClass=MachinesRepository::class)
 */
class Machines
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
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=ObjectAddress::class, inversedBy="machines")
     */
    private $objectAddress;

    /**
     * @ORM\OneToMany(targetEntity=Todo::class, mappedBy="machine")
     */
    private $todos;

    /**
     * @ORM\OneToMany(targetEntity=Complaints::class, mappedBy="machine")
     */
    private $complaints;

    /**
     * @ORM\ManyToOne(targetEntity=Halls::class, inversedBy="machines")
     */
    private $hall;

    /**
     * @ORM\ManyToOne(targetEntity=MachinesGroups::class, inversedBy="machines")
     */
    private $groups;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $serialNumber;

    public function __construct()
    {
        $this->todos = new ArrayCollection();
        $this->complaints = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    /**
     * @return Collection|Todo[]
     */
    public function getTodos(): Collection
    {
        return $this->todos;
    }

    public function addTodo(Todo $todo): self
    {
        if (!$this->todos->contains($todo)) {
            $this->todos[] = $todo;
            $todo->setMachine($this);
        }

        return $this;
    }

    public function removeTodo(Todo $todo): self
    {
        if ($this->todos->removeElement($todo)) {
            // set the owning side to null (unless already changed)
            if ($todo->getMachine() === $this) {
                $todo->setMachine(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Complaints[]
     */
    public function getComplaints(): Collection
    {
        return $this->complaints;
    }

    public function addComplaint(Complaints $complaint): self
    {
        if (!$this->complaints->contains($complaint)) {
            $this->complaints[] = $complaint;
            $complaint->setMachine($this);
        }

        return $this;
    }

    public function removeComplaint(Complaints $complaint): self
    {
        if ($this->complaints->removeElement($complaint)) {
            // set the owning side to null (unless already changed)
            if ($complaint->getMachine() === $this) {
                $complaint->setMachine(null);
            }
        }

        return $this;
    }

    public function getHall(): ?Halls
    {
        return $this->hall;
    }

    public function setHall(?Halls $hall): self
    {
        $this->hall = $hall;

        return $this;
    }

    public function getGroups(): ?MachinesGroups
    {
        return $this->groups;
    }

    public function setGroups(?MachinesGroups $groups): self
    {
        $this->groups = $groups;

        return $this;
    }

    public function getSerialNumber(): ?string
    {
        return $this->serialNumber;
    }

    public function setSerialNumber(?string $serialNumber): self
    {
        $this->serialNumber = $serialNumber;

        return $this;
    }
}
