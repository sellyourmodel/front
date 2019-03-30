<?php

namespace App\Twig\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Templating\Helper\Helper;

/**
 * Provides an extension for Twig to output small news
 */
class unreadNotifyExtension extends \Twig_Extension
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
            new \Twig_SimpleFunction("unreadNotify", [$this, "renderUnreadNotify"], ["is_safe" => ["html"]]),
        );
    }

    /**
     * @param  array $options
     * @return string
     */
    public function renderUnreadNotify(array $options = array())
    {
        $em = $this->container->get('doctrine')->getManager();

        $user = $this->container->get('security.token_storage')->getToken()->getUser();
        if(!$user){
            return '';
        }

        $connection = $em->getConnection();

        $statement = $connection->prepare("SELECT COUNT(*) as count FROM notify WHERE user_id={$user->getId()} AND is_read=0");
        $statement->execute();
        $results = $statement->fetchAll();
        $count = $results[0]["count"];

        if($count == 0){
            return '';
        }

        return $this->container->get('templating')->render("block/unreadNotify.html.twig", ["count"=>$count]);

    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return "unreadNotify";
    }
}
