<?php

namespace App\Controller;

use App\Entity\TodoType;
use App\Form\TodoTypeType;
use App\Repository\TodoTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/todo_type",
 *     locale="pl",
 *     requirements={
 *         "_locale": "en|pl",
 *      }
 * )
 */
class TodoTypeController extends AbstractController
{
    /**
     * @Route("/", name="todo_type_index", methods={"GET"})
     */
    public function index(TodoTypeRepository $todoTypeRepository): Response
    {
        return $this->render('todo_type/index.html.twig', [
            'todo_types' => $todoTypeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="todo_type_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $todoType = new TodoType();
        $form = $this->createForm(TodoTypeType::class, $todoType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($todoType);
            $entityManager->flush();

            return $this->redirectToRoute('todo_type_index');
        }

        return $this->render('todo_type/new.html.twig', [
            'todo_type' => $todoType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todo_type_show", methods={"GET"})
     */
    public function show(TodoType $todoType): Response
    {
        return $this->render('todo_type/show.html.twig', [
            'todo_type' => $todoType,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="todo_type_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TodoType $todoType): Response
    {
        $form = $this->createForm(TodoTypeType::class, $todoType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('todo_type_index');
        }

        return $this->render('todo_type/edit.html.twig', [
            'todo_type' => $todoType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todo_type_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TodoType $todoType): Response
    {
        if ($this->isCsrfTokenValid('delete'.$todoType->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($todoType);
            $entityManager->flush();
        }

        return $this->redirectToRoute('todo_type_index');
    }
}
