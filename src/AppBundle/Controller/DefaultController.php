<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepageAction(Request $request)
    {
        $products = $this->getDoctrine()
            ->getRepository('AppBundle:Product')
            ->findAll();

        return $this->render('default/homepage.html.twig', array(
            'products' => $products,
        ));
    }
}
