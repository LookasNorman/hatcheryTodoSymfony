<?php

namespace App\Controller;

use App\Entity\ObjectAddress;
use App\Form\ObjectAddressType;
use App\Repository\ObjectAddressRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/object/address")
 */
class ObjectAddressController extends AbstractController
{
    /**
     * @Route("/", name="object_address_index", methods={"GET"})
     */
    public function index(ObjectAddressRepository $objectAddressRepository): Response
    {
        return $this->render('object_address/index.html.twig', [
            'object_addresses' => $objectAddressRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="object_address_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $objectAddress = new ObjectAddress();
        $form = $this->createForm(ObjectAddressType::class, $objectAddress);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($objectAddress);
            $entityManager->flush();

            return $this->redirectToRoute('object_address_index');
        }

        return $this->render('object_address/new.html.twig', [
            'object_address' => $objectAddress,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="object_address_show", methods={"GET"})
     */
    public function show(ObjectAddress $objectAddress): Response
    {
        return $this->render('object_address/show.html.twig', [
            'object_address' => $objectAddress,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="object_address_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ObjectAddress $objectAddress): Response
    {
        $form = $this->createForm(ObjectAddressType::class, $objectAddress);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('object_address_index');
        }

        return $this->render('object_address/edit.html.twig', [
            'object_address' => $objectAddress,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="object_address_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ObjectAddress $objectAddress): Response
    {
        if ($this->isCsrfTokenValid('delete'.$objectAddress->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($objectAddress);
            $entityManager->flush();
        }

        return $this->redirectToRoute('object_address_index');
    }
}
