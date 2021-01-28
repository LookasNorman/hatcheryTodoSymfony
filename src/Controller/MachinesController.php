<?php

namespace App\Controller;

use App\Entity\Halls;
use App\Entity\Machines;
use App\Form\MachinesType;
use App\Repository\MachinesRepository;
use App\Repository\TodoRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/machines"
 * )
 * @IsGranted("ROLE_USER")
 */
class MachinesController extends AbstractController
{
    /**
     * @Route("/", name="machines_index", methods={"GET"})
     */
    public function index(MachinesRepository $machinesRepository): Response
    {
        return $this->render('machines/index.html.twig', [
            'machines' => $machinesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="machines_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $machine = new Machines();
        $form = $this->createForm(MachinesType::class, $machine);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($machine);
            $entityManager->flush();

            return $this->redirectToRoute('machines_index');
        }

        return $this->render('machines/new.html.twig', [
            'machine' => $machine,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="machines_show", methods={"GET"})
     */
    public function show(Machines $machine): Response
    {
        return $this->render('machines/show.html.twig', [
            'machine' => $machine,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="machines_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Machines $machine): Response
    {
        $form = $this->createForm(MachinesType::class, $machine);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('machines_index');
        }

        return $this->render('machines/edit.html.twig', [
            'machine' => $machine,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="machines_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Machines $machine): Response
    {
        if ($this->isCsrfTokenValid('delete' . $machine->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($machine);
            $entityManager->flush();
        }

        return $this->redirectToRoute('machines_index');
    }

    /**
     * @Route("/halls/{id}", name="machines_hall_index", methods={"GET"})
     */
    public function indexHalls(MachinesRepository $machinesRepository, Halls $halls): Response
    {
        return $this->render('machines/index.html.twig', [
            'machines' => $machinesRepository->findBy(['hall' => $halls]),
        ]);
    }

    /**
     * @Route("/card/{id}", name="machines_card", methods={"GET"})
     */
    public function card(TodoRepository $todoRepository, Machines $machine): Response
    {
        $todos = $todoRepository->findBy(['machine' => $machine]);

        return $this->render('machines/card.html.twig', [
            'machine' => $machine,
            'todos' => $todos
        ]);
    }
}
