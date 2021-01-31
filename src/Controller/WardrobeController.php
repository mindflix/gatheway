<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WardrobeController extends AbstractController
{
    /**
     * @Route("/wardrobe", name="wardrobe")
     */
    public function index(): Response
    {
        return $this->render('wardrobe/index.html.twig');
    }
}
