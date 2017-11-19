<?php

namespace AppBundle\EventListener;

use AppBundle\Entity\ProductImage;
use Oneup\UploaderBundle\Event\PostUploadEvent;
use Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\ORM\EntityManager;
use Sonata\MediaBundle\Entity\MediaManager;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Imagine\Image\Point;

class UploadAvatarListener
{
    protected $em;
    protected $container;
    protected $mm;

    public function __construct($container, EntityManager $em, MediaManager $mm)
    {
        $this->em = $em;
        $this->container = $container;
        $this->mm = $mm;

    }

    public function onUpload(PostUploadEvent $event)
    {

        $response = $event->getResponse();
        $request = $event->getRequest();
        $fileOriginal =$request->files->get('files')[0];
        $fileName = $fileOriginal->getClientOriginalName();
        $mimeType = $fileOriginal->getClientMimeType();

        $fileNameToSend = basename($event->getFile()->getPathname());

        $media = new Media;
        $media->setBinaryContent($event->getFile()->getPathname());
        $media->setContext('avatar');
        $media->setProviderName('sonata.media.provider.image');
        $this->mm->save($media);

        $user = $this->container->get('security.context')->getToken()->getUser();

        $user->setImage($media);
        $this->em->flush($user);

        $provider = $this->container->get($media->getProviderName());
        $path = $provider->generatePublicUrl($media, 'avatar_big');

        $response["wp_error"] = false;
        $response["wp_file"] = $path;

        //unlink($event->getFile()->getPathname());

    }
}