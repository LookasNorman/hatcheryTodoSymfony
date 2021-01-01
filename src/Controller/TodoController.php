<?php

namespace App\Controller;

use App\Entity\ObjectAddress;
use App\Entity\Todo;
use App\Form\TodoType;
use App\Repository\TodoRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/todo",
 *     locale="pl",
 *     requirements={
 *         "_locale": "en|pl",
 *      }
 * )
 * @IsGranted("ROLE_USER")
 */
class TodoController extends AbstractController
{
    /**
     * @Route("/", name="todo_index", methods={"GET"})
     */
    public function index(TodoRepository $todoRepository): Response
    {
        return $this->render('todo/index.html.twig', [
            'todos' => $todoRepository->findBy([], [
                'endDate' => 'ASC',
                'date' => 'ASC'
            ]),
        ]);
    }

    /**
     * @Route("/new", name="todo_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $todo = new Todo();
        $form = $this->createForm(TodoType::class, $todo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($todo);
            $entityManager->flush();

            return $this->redirectToRoute('todo_index');
        }

        return $this->render('todo/new.html.twig', [
            'todo' => $todo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todo_show", methods={"GET"})
     */
    public function show(Todo $todo): Response
    {
        return $this->render('todo/show.html.twig', [
            'todo' => $todo,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="todo_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Todo $todo): Response
    {
        $form = $this->createForm(TodoType::class, $todo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->flush();
            if (!empty($todo->getRepeatTime()) and !empty($todo->getEndDate())) {
                $days = $todo->getRepeatTime();
                $date = $todo->getEndDate();
                $date->add(new \DateInterval('P'.$days.'D'));
                $newTodo = clone $todo;
                $newTodo->setDate($date);
                $newTodo->setEndDate(null);
                $em->persist($newTodo);
                $em->flush();
            }

            return $this->redirectToRoute('todo_index');
        }

        return $this->render('todo/edit.html.twig', [
            'todo' => $todo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todo_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Todo $todo): Response
    {
        if ($this->isCsrfTokenValid('delete' . $todo->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($todo);
            $entityManager->flush();
        }

        return $this->redirectToRoute('todo_index');
    }

    /**
     * @Route("/menu/{id}", name="todo_menu", methods={"GET"})
     */
    public function objectTodo(ObjectAddress $objectAddress, TodoRepository $todoRepository)
    {
        return $this->render('todo/index.html.twig', [
            'todos' => $todoRepository->findBy(['objectAddress' => $objectAddress], [
                'endDate' => 'ASC',
                'date' => 'ASC'
            ]),
        ]);
    }
}
