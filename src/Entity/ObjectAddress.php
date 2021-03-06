<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ObjectAddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ObjectAddressRepository::class)
 */
class ObjectAddress
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $streetNumber;

    /**
     * @ORM\Column(type="string", length=15, nullable=true)
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\OneToMany(targetEntity=Todo::class, mappedBy="objectAddress")
     */
    private $todos;

    /**
     * @ORM\OneToMany(targetEntity=Machines::class, mappedBy="objectAddress")
     */
    private $machines;

    /**
     * @ORM\OneToMany(targetEntity=Orders::class, mappedBy="objectAddress")
     */
    private $orders;

    /**
     * @ORM\OneToMany(targetEntity=Halls::class, mappedBy="objectAddress")
     */
    private $halls;

    public function __construct()
    {
        $this->todos = new ArrayCollection();
        $this->machines = new ArrayCollection();
        $this->orders = new ArrayCollection();
        $this->halls = new ArrayCollection();
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

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(?string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->streetNumber;
    }

    public function setStreetNumber(?string $streetNumber): self
    {
        $this->streetNumber = $streetNumber;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

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
            $todo->setObjectAddress($this);
        }

        return $this;
    }

    public function removeTodo(Todo $todo): self
    {
        if ($this->todos->removeElement($todo)) {
            // set the owning side to null (unless already changed)
            if ($todo->getObjectAddress() === $this) {
                $todo->setObjectAddress(null);
            }
        }

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
            $machine->setObjectAddress($this);
        }

        return $this;
    }

    public function removeMachine(Machines $machine): self
    {
        if ($this->machines->removeElement($machine)) {
            // set the owning side to null (unless already changed)
            if ($machine->getObjectAddress() === $this) {
                $machine->setObjectAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Orders[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Orders $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setObjectAddress($this);
        }

        return $this;
    }

    public function removeOrder(Orders $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getObjectAddress() === $this) {
                $order->setObjectAddress(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Halls[]
     */
    public function getHalls(): Collection
    {
        return $this->halls;
    }

    public function addHall(Halls $hall): self
    {
        if (!$this->halls->contains($hall)) {
            $this->halls[] = $hall;
            $hall->setObjectAddress($this);
        }

        return $this;
    }

    public function removeHall(Halls $hall): self
    {
        if ($this->halls->removeElement($hall)) {
            // set the owning side to null (unless already changed)
            if ($hall->getObjectAddress() === $this) {
                $hall->setObjectAddress(null);
            }
        }

        return $this;
    }
}
