<?php

namespace AppBundle\Routing;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\Config\Loader\LoaderResolver;
use Symfony\Component\Config\Loader\LoaderResolverInterface;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class DynamicLoader implements LoaderInterface
{
    private $loaded = false;
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function load($resource, $type = null)
    {
        if (true === $this->loaded) {
            throw new \RuntimeException('Do not add this loader twice');
        }

        $routes = new RouteCollection();

        $pages = $this->em->getRepository('AppBundle:TextPage')->getPages();

        foreach($pages as $e){
            $route = new Route($e->getUrl().'/', ['_controller' => 'AppBundle:TextPage:index']);
            $routes->add('page_'.$e->getId(), $route);
        }



        return $routes;
    }

    public function supports($resource, $type = null)
    {
        return 'dynamic' === $type;
    }

    public function getResolver()
    {
    }

    public function setResolver(LoaderResolverInterface $resolver)
    {
        // irrelevant to us, since we don't need a resolver
    }
}