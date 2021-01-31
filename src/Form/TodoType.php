<?php

namespace App\Form;

use App\Entity\Machines;
use App\Entity\ObjectAddress;
use App\Entity\Todo;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TodoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('description', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('date', DateType::class, [
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('endDate', DateType::class, [
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('repeatTime', IntegerType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('owner', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'username',
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('objectAddress', EntityType::class, [
                'placeholder' => 'Choose an localization',
                'class' => ObjectAddress::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('machine', EntityType::class, [
                'placeholder' => 'Choose an machine or null',
                'required' => false,
                'class' => Machines::class,
                'choice_label' => function(Machines $machines) {
                    return $machines->getName() . ' - ' . $machines->getObjectAddress()->getName();
                },
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('type', EntityType::class, [
                'placeholder' => 'Choose an todo type',
                'class' => \App\Entity\TodoType::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Todo::class,
        ]);
    }
}
