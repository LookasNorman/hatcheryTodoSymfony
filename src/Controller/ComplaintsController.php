<?php

namespace App\Controller;

use App\Entity\Complaints;
use App\Form\ComplaintsType;
use App\Repository\ComplaintsRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(
 *     "/complaints"
 * )
 * @IsGranted("ROLE_USER")
 */
class ComplaintsController extends AbstractController
{
    /**
     * @Route("/", name="complaints_index", methods={"GET"})
     */
    public function index(ComplaintsRepository $complaintsRepository): Response
    {
        $complaints = $complaintsRepository->findBy(['removalDate' => null], ['filingDate' => 'ASC']);
        return $this->render('complaints/index.html.twig', [
            'complaints' => $complaints,
        ]);
    }

    /**
     * @Route("/new", name="complaints_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $complaint = new Complaints();
        $form = $this->createForm(ComplaintsType::class, $complaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($complaint);
            $entityManager->flush();

            return $this->redirectToRoute('complaints_index');
        }

        return $this->render('complaints/new.html.twig', [
            'complaint' => $complaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="complaints_show", methods={"GET"})
     */
    public function show(Complaints $complaint): Response
    {
        return $this->render('complaints/show.html.twig', [
            'complaint' => $complaint,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="complaints_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Complaints $complaint): Response
    {
        $form = $this->createForm(ComplaintsType::class, $complaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('complaints_index');
        }

        return $this->render('complaints/edit.html.twig', [
            'complaint' => $complaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="complaints_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Complaints $complaint): Response
    {
        if ($this->isCsrfTokenValid('delete'.$complaint->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($complaint);
            $entityManager->flush();
        }

        return $this->redirectToRoute('complaints_index');
    }
}
