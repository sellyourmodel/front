<?php

namespace AppBundle\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output small news
 */
class sitesExtension extends \Twig_Extension
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
            "sites" => new \Twig_Function_Method($this, "renderSites", array("is_safe" => array("html"))),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderSites(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        return $this->container->get('templating')->render("AppBundle:Block:sites.html.twig", ["sites"=>$em->getRepository('AppBundle:Site')->findAll()]);

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "sites";
    }
}
