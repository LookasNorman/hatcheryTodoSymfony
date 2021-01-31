<?php

namespace App\Form;

use App\Entity\Halls;
use App\Entity\Machines;
use App\Entity\MachinesGroups;
use App\Entity\ObjectAddress;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MachinesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('serialNumber', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('objectAddress', EntityType::class, [
                'class' => ObjectAddress::class,
                'choice_label' => 'name',
                'placeholder' => 'Choose an location',
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('hall', EntityType::class, [
                'placeholder' => 'Choose an hall / building',
                'class' => Halls::class,
                'choice_label' => function(Halls $halls) {
                return $halls->getName() . ' - ' . $halls->getObjectAddress()->getName();
                },
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('groups', EntityType::class, [
                'class' => MachinesGroups::class,
                'choice_label' => 'name',
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Machines::class,
        ]);
    }
}
