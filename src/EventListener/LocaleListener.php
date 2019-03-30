<?php

namespace App\EventListener;

use App\Entity\ProductImage;
use Oneup\UploaderBundle\Event\PostUploadEvent;
use App\Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class LocaleListener
{
    protected $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        if (!$event->isMasterRequest()) {
            // don't do anything if it's not the master request
            return;
        }

        $request = $event->getRequest();

        $host = $request->getHost();

        $site = $this->em->getRepository('App:Site')->findOneBy(["name"=>$host]);
        if(!$site){
            $locale = 'ru';
        }
        else{
            $locale = $site->getLocale();
        }

        $request->setLocale($locale);
    }
}