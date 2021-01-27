<?php

namespace App\Controller;

use App\Entity\Halls;
use App\Entity\ObjectAddress;
use App\Form\HallsType;
use App\Repository\HallsRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/halls"
 * )
 * @IsGranted("ROLE_USER")
 */
class HallsController extends AbstractController
{
    /**
     * @Route("/", name="halls_index", methods={"GET"})
     */
    public function index(HallsRepository $hallsRepository): Response
    {
        return $this->render('halls/index.html.twig', [
            'halls' => $hallsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="halls_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $hall = new Halls();
        $form = $this->createForm(HallsType::class, $hall);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($hall);
            $entityManager->flush();

            return $this->redirectToRoute('halls_index');
        }

        return $this->render('halls/new.html.twig', [
            'hall' => $hall,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="halls_show", methods={"GET"})
     */
    public function show(Halls $hall): Response
    {
        return $this->render('halls/show.html.twig', [
            'hall' => $hall,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="halls_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Halls $hall): Response
    {
        $form = $this->createForm(HallsType::class, $hall);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('halls_index');
        }

        return $this->render('halls/edit.html.twig', [
            'hall' => $hall,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="halls_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Halls $hall): Response
    {
        if ($this->isCsrfTokenValid('delete'.$hall->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($hall);
            $entityManager->flush();
        }

        return $this->redirectToRoute('halls_index');
    }

    /**
     * @Route("/object/{id}", name="halls_object_index", methods={"GET"})
     */
    public function indexObject(HallsRepository $hallsRepository, ObjectAddress $address): Response
    {
        return $this->render('halls/index.html.twig', [
            'halls' => $hallsRepository->findBy(['objectAddress' => $address]),
        ]);
    }
}
