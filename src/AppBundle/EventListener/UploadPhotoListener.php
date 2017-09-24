<?php

namespace AppBundle\EventListener;

use AppBundle\Entity\ProductFile;
use AppBundle\Entity\ProductImage;
use Oneup\UploaderBundle\Event\PostUploadEvent;
use Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\ORM\EntityManager;
use Sonata\MediaBundle\Entity\MediaManager;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Imagine\Image\Point;

class UploadPhotoListener
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

        if($mimeType == 'image/jpeg' OR $mimeType == 'image/png'){
            $type = 'image';
        }
        else{
            $type = 'file';
        }

        $contentType = $request->get('type');
        if($contentType == 'mainImg'){
            $deleteFunction = 'deleteMainImg';
        }
        else{
            $deleteFunction = 'deleteOtherFiles';
        }

        if($contentType == 'mainImg' OR $contentType == 'addImg'){
            $imageTest = @imagecreatefromstring(file_get_contents($event->getFile()->getPathname()));
            if (!is_resource($imageTest)) {
                $response["wp_error"] = true;
                $response["wp_error_text"] = "Вы загрузили не изображение";
                return;
            }
        }

        $file = new ProductFile();
        $file->setName($fileName);
        $file->setNameFile($fileNameToSend);
        $file->setDate(new \DateTime());
        $file->setType($type);

        $this->em->persist($file);
        $this->em->flush($file);

        $html = '<div class="model-files__item">'.$fileName.' <i class="fa fa-close" onclick="'.$deleteFunction.'(this);"></i><input type="hidden" name="'.$contentType.'[]" value="'.$file->getId().'" /></div>';

        $response["wp_error"] = false;
        $response["wp_file"] = $fileNameToSend;
        $response["wp_container"] = $html;

        //unlink($event->getFile()->getPathname());

    }
}