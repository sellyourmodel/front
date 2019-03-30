<?php
namespace App\DependencyInjection\Compiler;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

/**
 * Class OverrideServiceCompilerPass
 * @package Shopmacher\IsaBodyWearBundle\DependencyInjection\Compiler
 */
class OverrideServiceCompilerPass implements CompilerPassInterface
{

    /**
     * Overwrite project specific services
     * @param ContainerBuilder $container
     */
    public function process(ContainerBuilder $container)
    {
        $defNewService = $container->getDefinition('hwi_oauth.resource_owner.vkontakte');
        $defNewService ->setClass('App\OAuth\ResourceOwner\VkontakteResourceOwner');

    }
}