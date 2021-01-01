<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\HallsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=HallsRepository::class)
 */
class Halls
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=ObjectAddress::class, inversedBy="halls")
     */
    private $objectAddress;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity=Machines::class, mappedBy="hall")
     */
    private $machines;

    public function __construct()
    {
        $this->machines = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Machines[]
     */
    public function getMachines(): Collection
    {
        return $this->machines;
    }

    public function addMachine(Machines $machine): self
    {
        if (!$this->machines->contains($machine)) {
            $this->machines[] = $machine;
            $machine->setHall($this);
        }

        return $this;
    }

    public function removeMachine(Machines $machine): self
    {
        if ($this->machines->removeElement($machine)) {
            // set the owning side to null (unless already changed)
            if ($machine->getHall() === $this) {
                $machine->setHall(null);
            }
        }

        return $this;
    }
}
