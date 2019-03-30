<?php

namespace App\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output filters
 */
class filtersExtension extends \Twig_Extension
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
            new \Twig_SimpleFunction("filters", [$this, "renderFilters"], ["is_safe" => ["html"]]),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderFilters(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $software = $em->getRepository('App:Software')->findForStats();
        $style = $em->getRepository('App:Style')->findForStats();

        return $this->container->get('templating')->render("block/filters.html.twig", [
            "software" => $software,
            "style" => $style
        ]);

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "filters";
    }
}
