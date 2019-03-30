<?php

namespace App\Routing;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Config\Loader\Loader;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class DynamicLoader extends Loader
{
    private $isLoaded = false;
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function load($resource, $type = null)
    {
        if (true === $this->isLoaded) {
            throw new \RuntimeException('Do not add the "extra" loader twice');
        }

        $routes = new RouteCollection();

        $pages = $this->em->getRepository('App:TextPage')->getPages();

        foreach($pages as $e){
            $route = new Route($e->getUrl().'/', ['_controller' => 'App\Controller\TextPageController::index']);
            $routes->add('page_'.$e->getId(), $route);
        }

        return $routes;
    }

    public function supports($resource, $type = null)
    {
        return 'extra' === $type;
    }
}