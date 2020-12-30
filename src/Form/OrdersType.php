<?php

namespace App\Form;

use App\Entity\ObjectAddress;
use App\Entity\Orders;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrdersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Name', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('description', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('supplier', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('objectAddress', EntityType::class, [
                'class' => ObjectAddress::class,
                'placeholder' => 'Choose an object address',
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
            'data_class' => Orders::class,
        ]);
    }
}
