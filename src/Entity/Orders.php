<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OrdersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=OrdersRepository::class)
 */
class Orders
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
    private $Name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=ObjectAddress::class, inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $objectAddress;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $supplier;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

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

    public function getObjectAddress(): ?ObjectAddress
    {
        return $this->objectAddress;
    }

    public function setObjectAddress(?ObjectAddress $objectAddress): self
    {
        $this->objectAddress = $objectAddress;

        return $this;
    }

    public function getSupplier(): ?string
    {
        return $this->supplier;
    }

    public function setSupplier(?string $supplier): self
    {
        $this->supplier = $supplier;

        return $this;
    }
}
