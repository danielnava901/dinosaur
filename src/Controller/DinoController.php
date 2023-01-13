<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DinoController extends AbstractController
{
    #[Route('/dino', name: 'app_dino')]
    public function index(): Response
    {
        return $this->render('dino/index.html.twig', [
            'controller_name' => 'DinoController',
        ]);
    }


    #[Route('/{theOtherId}/chat', name: 'app_chat')]
    public function chat(Request $request, $theOtherId): Response
    {
        return $this->render('dino/chat.html.twig', [
            "chatData" => [
                "theOtherId" => $theOtherId,
                "theDate" => date("D"),
            ]
        ]);
    }

    #[Route('/dummy', name: 'app_dummy')]
    public function dummy(Request $request): Response
    {
        return $this->render('dino/dummy.html.twig', [

        ]);
    }

    public function getName()
    {
        $stack = [];


    }
}
