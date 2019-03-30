<?php

namespace App\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output banners
 */
class cookieAgreeExtension extends \Twig_Extension
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
            new \Twig_SimpleFunction("cookieAgree", [$this, "renderCookieAgree"], ["is_safe" => ["html"]]),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderCookieAgree(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $requestStack = $this->container->get('request_stack');

        $request = $requestStack->getCurrentRequest();
        if($request->cookies->get('cookieAgree') == 'true'){
            return '';
        }

        return $this->container->get('templating')->render("block/cookieAgree.html.twig");

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "cookieAgree";
    }
}
