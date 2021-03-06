<?php

namespace App\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output small news
 */
class menuExtension extends \Twig_Extension
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Returns a list of functions to add to the existing list.
     *
     * @return array An array of functions
     */
    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction("menu", [$this, "renderMenu"], ["is_safe" => ["html"]]),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderMenu(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $categories = [];

        for($i=1;$i<=5;$i++){
            $categories[$i] = $em->getRepository('App:Category')->findBy(["parent"=>NULL, "colNumber"=>$i],["pos"=>"ASC"]);
        }

        return $this->container->get('templating')->render("block/menu.html.twig", ["categories"=>$categories]);

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "menu";
    }
}
