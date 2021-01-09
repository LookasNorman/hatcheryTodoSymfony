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
 * @Route("/todo"
 * )
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
                $date->add(new \DateInterval('P' . $days . 'D'));
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

    public function todosOverdue($date): Response
    {
        $em = $this->getDoctrine();
        $date = new \DateTime($date);
        $objectAddressRepository = $em->getRepository(ObjectAddress::class);
        $todoTypeRepository = $em->getRepository(\App\Entity\TodoType::class);
        $todoRepository = $em->getRepository(Todo::class);

        $objectsAddresses = $objectAddressRepository->findAll();
        $todosTypes = $todoTypeRepository->findAll();

        $todosOverdue = [];
        foreach ($objectsAddresses as $key => $objectAddress) {
            $todos = [];
            foreach ($todosTypes as $key2 => $todoType) {
                $todos [$todoType->getName()] = $todoRepository
                    ->todosOverdueByTypeObjectAddress($date, $objectAddress, $todoType);
            }
            $todosOverdue [$objectAddress->getName()] = $todos;
        }

        $response = new Response(json_encode($todosOverdue));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function todosToday($date): Response
    {
        $em = $this->getDoctrine();
        $date = new \DateTime($date);
        $objectAddressRepository = $em->getRepository(ObjectAddress::class);
        $todoTypeRepository = $em->getRepository(\App\Entity\TodoType::class);
        $todoRepository = $em->getRepository(Todo::class);

        $objectsAddresses = $objectAddressRepository->findAll();
        $todosTypes = $todoTypeRepository->findAll();

        $todosOverdue = [];
        foreach ($objectsAddresses as $key => $objectAddress) {
            $todos = [];
            foreach ($todosTypes as $key2 => $todoType) {
                $todos [$todoType->getName()] = $todoRepository
                    ->todosTodayByTypeObjectAddress($date, $objectAddress, $todoType);
            }
            $todosOverdue [$objectAddress->getName()] = $todos;
        }

        $response = new Response(json_encode($todosOverdue));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function todosNext($date): Response
    {
        $em = $this->getDoctrine();
        $date = new \DateTime($date);
        $objectAddressRepository = $em->getRepository(ObjectAddress::class);
        $todoTypeRepository = $em->getRepository(\App\Entity\TodoType::class);
        $todoRepository = $em->getRepository(Todo::class);

        $objectsAddresses = $objectAddressRepository->findAll();
        $todosTypes = $todoTypeRepository->findAll();

        $todosOverdue = [];
        foreach ($objectsAddresses as $key => $objectAddress) {
            $todos = [];
            foreach ($todosTypes as $key2 => $todoType) {
                $todos [$todoType->getName()] = $todoRepository
                    ->todosNextByTypeObjectAddress($date, $objectAddress, $todoType);
            }
            $todosOverdue [$objectAddress->getName()] = $todos;
        }

        $response = new Response(json_encode($todosOverdue));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
    public function todosObject($date)
    {
        $em = $this->getDoctrine();
        $date = new \DateTime($date);
        $objectAddressRepository = $em->getRepository(ObjectAddress::class);
        $todoTypeRepository = $em->getRepository(\App\Entity\TodoType::class);
        $todoRepository = $em->getRepository(Todo::class);

        $objectsAddresses = $objectAddressRepository->findAll();
        $todosTypes = $todoTypeRepository->findAll();

        $todosObject = [];

        foreach ($objectsAddresses as $key => $objectAddress) {
            $todos = [];
            foreach ($todosTypes as $key2 => $todoType) {
                $todos [$todoType->getName()] = $todoRepository
                    ->findBy([
                        "objectAddress" => $objectAddress,
                        "endDate" => NULL
                    ]);
            }
            $todosObject [$objectAddress->getName()] = $todos;
        }

        $response = new Response(json_encode($todosObject));
        $response->headers->set('Content-Type', 'application/json');

        return $response;

    }

}
