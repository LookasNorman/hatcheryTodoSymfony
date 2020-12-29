<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ComplaintsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ComplaintsRepository::class)
 */
class Complaints
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
    private $partName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=Machines::class, inversedBy="complaints")
     */
    private $machine;

    /**
     * @ORM\Column(type="date")
     */
    private $filingDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $removalDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPartName(): ?string
    {
        return $this->partName;
    }

    public function setPartName(string $partName): self
    {
        $this->partName = $partName;

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

    public function getMachine(): ?Machines
    {
        return $this->machine;
    }

    public function setMachine(?Machines $machine): self
    {
        $this->machine = $machine;

        return $this;
    }

    public function getFilingDate(): ?\DateTimeInterface
    {
        return $this->filingDate;
    }

    public function setFilingDate(\DateTimeInterface $filingDate): self
    {
        $this->filingDate = $filingDate;

        return $this;
    }

    public function getRemovalDate(): ?\DateTimeInterface
    {
        return $this->removalDate;
    }

    public function setRemovalDate(?\DateTimeInterface $removalDate): self
    {
        $this->removalDate = $removalDate;

        return $this;
    }
}
