<?php

namespace App\Controller;

use App\Entity\MachinesGroups;
use App\Form\MachinesGroupsType;
use App\Repository\MachinesGroupsRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/machine_groups",
 *     locale="pl",
 *     requirements={
 *         "_locale": "en|pl",
 *      }
 * )
 * @IsGranted("ROLE_USER")
 */
class MachinesGroupsController extends AbstractController
{
    /**
     * @Route("/", name="machines_groups_index", methods={"GET"})
     */
    public function index(MachinesGroupsRepository $machinesGroupsRepository): Response
    {
        return $this->render('machines_groups/index.html.twig', [
            'machines_groups' => $machinesGroupsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="machines_groups_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $machinesGroup = new MachinesGroups();
        $form = $this->createForm(MachinesGroupsType::class, $machinesGroup);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($machinesGroup);
            $entityManager->flush();

            return $this->redirectToRoute('machines_groups_index');
        }

        return $this->render('machines_groups/new.html.twig', [
            'machines_group' => $machinesGroup,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="machines_groups_show", methods={"GET"})
     */
    public function show(MachinesGroups $machinesGroup): Response
    {
        return $this->render('machines_groups/show.html.twig', [
            'machines_group' => $machinesGroup,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="machines_groups_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MachinesGroups $machinesGroup): Response
    {
        $form = $this->createForm(MachinesGroupsType::class, $machinesGroup);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('machines_groups_index');
        }

        return $this->render('machines_groups/edit.html.twig', [
            'machines_group' => $machinesGroup,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="machines_groups_delete", methods={"DELETE"})
     */
    public function delete(Request $request, MachinesGroups $machinesGroup): Response
    {
        if ($this->isCsrfTokenValid('delete'.$machinesGroup->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($machinesGroup);
            $entityManager->flush();
        }

        return $this->redirectToRoute('machines_groups_index');
    }
}
