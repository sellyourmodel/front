<?php

namespace AppBundle\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output banners
 */
class bannersExtension extends \Twig_Extension
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
            "bannerBottom" => new \Twig_Function_Method($this, "renderBannerBottom", array("is_safe" => array("html"))),
            "bannerRight" => new \Twig_Function_Method($this, "renderBannerRight", array("is_safe" => array("html"))),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderBannerBottom(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $bannersEntities = $em->getRepository('AppBundle:BannerBottom')->findBy(["active"=>true]);

        $banners = [];

        $ind = 0;
        foreach ($bannersEntities as $e){
            for($i=0;$i<$e->getPersent();$i++){
                $ind++;
                $banners[$ind] = $e;
            }
        }

        if(count($banners) == 0){
            return "";
        }

        $needInd = rand(0,count($banners));

        $banner = $banners[$needInd];

        return $this->container->get('templating')->render("AppBundle:Block:bannerBottom.html.twig", ["banner"=>$banner]);

    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderBannerRight(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $bannersEntities = $em->getRepository('AppBundle:BannerRight')->findBy(["active"=>true]);

        $banners = [];

        $ind = 0;
        foreach ($bannersEntities as $e){
            for($i=0;$i<$e->getPersent();$i++){
                $ind++;
                $banners[$ind] = $e;
            }
        }

        if(count($banners) == 0){
            return "";
        }

        $needInd = rand(0,count($banners));

        $banner = $banners[$needInd];

        return $this->container->get('templating')->render("AppBundle:Block:bannerRight.html.twig", ["banner"=>$banner]);

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "banners";
    }
}
