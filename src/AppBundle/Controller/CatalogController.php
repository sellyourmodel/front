<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Buy;
use AppBundle\Entity\PaymentLog;
use AppBundle\Entity\Product;
use AppBundle\Entity\ProductComment;
use AppBundle\Entity\ProductFavorite;
use AppBundle\Entity\ProductImage;
use AppBundle\Entity\ProductLike;
use AppBundle\Entity\Tag;
use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Security\Core\Exception\AccountStatusException;
use Application\Sonata\MediaBundle\Entity\Media;

class  CatalogController extends Controller
{
    /**
     * @Route("/catalog/", name="catalog")
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $category = $em->getRepository('AppBundle:Category')->findOneBy(['parent'=>NULL, "active"=>true],["pos"=>"DESC"]);

        if(!$category){
            return $this->createNotFoundException('Category not found');
        }

        return $this->redirect($this->generateUrl('catalog_category', ["alias"=>$category->getAlias()]));
    }

    /**
     * @Route("/catalog/search/", name="catalog_search")
     * @Template()
     */
    public function searchAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $search = trim($request->get('search',''));

        if(mb_strlen($search) >= 3){
            $products = $em->getRepository('AppBundle:Product')->getSearch($search);
        }
        else{
            $products = [];
        }


        $breadcrumbs = $this->get("white_october_breadcrumbs");
        $breadcrumbs->addItem("Главная", $this->get("router")->generate("homepage"));
        $breadcrumbs->addItem("Поиск");

        return [
            "products"=>$products,
            "searchLen"=>mb_strlen($search)
        ];
    }

    /**
     * @Route("/catalog/add/", name="catalog_add")
     * @Template()
     */
    public function addAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $locale = $request->getLocale();
        $textBlock = $this->getDoctrine()->getRepository('AppBundle:RightTextBlock')->findOneBy(["type"=>"add"]);
        if($locale == 'en'){
            $rightText = $textBlock->getTextEn();
        }
        else{
            $rightText = $textBlock->getText();
        }

        return [
            "categories"=>$em->getRepository('AppBundle:Category')->findBy(["parent"=>NULL],["pos"=>"ASC"]),
            "tags"=>$em->getRepository('AppBundle:Tag')->findBy(["active"=>true],["name"=>"ASC"]),
            "software"=>$em->getRepository('AppBundle:Software')->findBy(["active"=>true],["name"=>"ASC"]),
            "rightText"=>$rightText
        ];
    }

    /**
     * @Route("/catalog/add/write/", name="catalog_add_write", options={"expose"=true})
     */
    public function addWriteAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $name = trim($request->get('name'));
        $categoryId = trim($request->get('category'));
        $mainImg = $request->get('mainImg');
        $addImg = $request->get('addImg');
        $files = $request->get('files');
        $manufacturer = trim($request->get('manufacturer'));
        $tags = $request->get('tags');
        $software = $request->get('software');
        $text = trim($request->get('text'));
        $user_agreement = trim($request->get('user_agreement', '0'));

        if($name == '' OR $categoryId == ''){
            return JsonResponse::create(["error" => true, 'error_text'=>'Заполните обязательные поля']);
        }

        $category = $em->getRepository('AppBundle:Category')->find($categoryId);

        if(!is_array($mainImg)){
            $mainImg = [];
        }
        if(!is_array($addImg)){
            $addImg = [];
        }
        if(!is_array($files)){
            $files = [];
        }

        if(!$category){
            return JsonResponse::create(["error" => true, 'error_text'=>'Категория не найдена']);
        }

        if(count($mainImg) == 0){
            return JsonResponse::create(["error" => true, 'error_text'=>'Загрузите изображения к модели']);
        }

        if(count($files) == 0){
            return JsonResponse::create(["error" => true, 'error_text'=>'Загрузите файлы модели']);
        }

        $images = [];

        foreach ($mainImg as $e){

            $file = $em->getRepository('AppBundle:ProductFile')->find($e);

            if($file){
                $images[] = $file;
            }

        }

        foreach ($addImg as $e){

            $file = $em->getRepository('AppBundle:ProductFile')->find($e);

            if($file){
                $images[] = $file;
            }

        }

        if(count($images) == 0){
            return JsonResponse::create(["error" => true, 'error_text'=>'Загрузите хотя бы одно изображение']);
        }

        if($user_agreement != '1'){
            return JsonResponse::create(["error"=>true, 'error_text'=>'Примите условия']);
        }

        $file = $this->get('kernel')->getRootDir().'/../web/uploads/images/'.$images[0]->getNameFile();

        $mediaMain = new Media;
        $mediaMain->setBinaryContent($file);
        $mediaMain->setContext('product');
        $mediaMain->setProviderName('sonata.media.provider.image');

        $mediaManager = $this->get('sonata.media.manager.media');
        $mediaManager->save($mediaMain);

        $entity = new Product();
        $entity->setUser($this->getUser());
        $entity->setDate(new \DateTime());
        $entity->setCategory($category);
        $entity->setName($name);
        $entity->setManufacturer($manufacturer);
        $entity->setText($text);

        $entity->setImage($mediaMain);

        $em->persist($entity);
        $em->flush($entity);

        $entity->setAlias($this->_generateAlias($entity->getName()).'-'.$entity->getId());
        $em->flush($entity);

        $pos = 0;

        for ($i=1;$i<count($images);$i++){
            $pos++;

            $file = $this->get('kernel')->getRootDir().'/../web/uploads/images/'.$images[$i]->getNameFile();

            $media = new Media;
            $media->setBinaryContent($file);
            $media->setContext('product');
            $media->setProviderName('sonata.media.provider.image');

            $mediaManager = $this->get('sonata.media.manager.media');
            $mediaManager->save($media);

            $productImage = new ProductImage();
            $productImage->setPos($pos);
            $productImage->setImage($media);
            $productImage->setProduct($entity);

            $em->persist($productImage);
            $em->flush($productImage);
        }

        foreach ($files as $e){

            $file = $em->getRepository('AppBundle:ProductFile')->find($e);

            if($file){
                if($file->getType() == 'file'){
                    $file->setProduct($entity);
                    $em->persist($file);
                    $em->flush($file);
                }
                elseif($file->getType() == 'image'){
                    $em->remove($file);
                    $em->flush($file);
                }
            }

        }

        if(is_array($tags)){
            foreach($tags as $e){
                $tagEntity = $em->getRepository('AppBundle:Tag')->findOneby(["name"=>$e]);
                if(!$tagEntity){
                    $tagEntity = new Tag();
                    $tagEntity->setActive(true);
                    $tagEntity->setName($e);

                    $em->persist($tagEntity);
                    $em->flush($tagEntity);
                }

                $entity->addTag($tagEntity);
            }
            $em->flush($entity);
        }

        if(is_array($software)){
            foreach($software as $e){
                $softwareEntity = $em->getRepository('AppBundle:Software')->find($e);
                if($softwareEntity){
                    $entity->addSoftware($softwareEntity);
                }
            }
            $em->flush($entity);
        }

        $this->getUser()->setModelsLoaded($this->getUser()->getModelsLoaded()+1);
        $em->flush($this->getUser());

        $user = $this->getUser();

        $models = $user->getModels();
        $models += 1;
        $user->setModels($models);

        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error" => false, 'url'=>$this->generateUrl('catalog_product',["alias"=>$entity->getAlias()])]);
    }

    /**
     * @Route("/catalog/tag/{id}/", name="catalog_tag")
     * @Template()
     */
    public function tagAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $tag = $em->getRepository('AppBundle:Tag')->findOneBy(['id'=>$id]);

        if(!$tag){
            throw $this->createNotFoundException('Tag not found');
        }

        $responseData = [];
        $responseData["tag"] = $tag;
        $responseData["products"] = $em->getRepository('AppBundle:Product')->getByTag($tag);

        return $responseData;
    }

    /**
     * @Route("/catalog/products/comments/", name="catalog_products_comments")
     * @Template()
     */
    public function productCommentAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            throw $this->createNotFoundException('Page not found');
        }

        $responseData = [];
        $responseData["comments"] = $em->getRepository('AppBundle:ProductComment')->findBy([], ["date"=>"DESC"]);
        $responseData["allList"] = true;

        return $responseData;
    }

    /**
     * @Route("/catalog/moderation/", name="catalog_moderation")
     * @Template()
     */
    public function moderationAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            throw $this->createNotFoundException('Page not found');
        }

        $responseData = [];
        $responseData["products"] = $em->getRepository('AppBundle:Product')->getForModeration();

        return $responseData;
    }

    /**
     * @Route("/catalog/moderation/{id}/write/", name="catalog_moderation_write")
     */
    public function moderationWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            return $returnError('У Вас нет права на упрвление моделями', '');
        }

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Product')->find($id);
        $entity->setModerated(true);
        $em->flush($entity);

        $data = [
            "product"=>$entity,
            "files" => $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$entity]),
            "alreadyBuy"=>$em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$entity, "user"=>$this->getUser()])
        ];

        $modelInfo = $this->renderView('AppBundle:Catalog:_model_info.html.twig', $data);

        $this->get('wp.notify.manager')->sendModerationModelEmail($entity);

        return JsonResponse::create(["error"=>false, 'modelInfo'=>$modelInfo]);
    }

    /**
     * @Route("/catalog/block/{id}/write/", name="catalog_block_write")
     */
    public function blockWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            return $returnError('У Вас нет права на упрвление моделями', '');
        }

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Product')->find($id);
        $entity->setBlock(true);
        $entity->setBlockReason($request->get('reason'));
        $em->flush($entity);

        $this->get('wp.notify.manager')->sendBlockModelEmail($entity);

        $data = [
            "product"=>$entity,
            "files" => $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$entity]),
            "alreadyBuy"=>$em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$entity, "user"=>$this->getUser()])
        ];

        $modelInfo = $this->renderView('AppBundle:Catalog:_model_info.html.twig', $data);

        return JsonResponse::create(["error"=>false, 'modelInfo'=>$modelInfo]);
    }

    /**
     * @Route("/catalog/unblock/{id}/write/", name="catalog_unblock_write")
     */
    public function unblockWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            return $returnError('У Вас нет права на упрвление моделями', '');
        }

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Product')->find($id);
        $entity->setBlock(false);
        $entity->setBlockReason(NULL);
        $em->flush($entity);

        $this->get('wp.notify.manager')->sendUnBlockModelEmail($entity);

        $data = [
            "product"=>$entity,
            "files" => $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$entity]),
            "alreadyBuy"=>$em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$entity, "user"=>$this->getUser()])
        ];

        $modelInfo = $this->renderView('AppBundle:Catalog:_model_info.html.twig', $data);

        return JsonResponse::create(["error"=>false, 'modelInfo'=>$modelInfo]);
    }

    /**
     * @Route("/catalog/delete/{id}/write/", name="catalog_delete_write")
     */
    public function deleteWriteAction(Request $request, $id)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Product')->find($id);

        if(!$this->isGranted('ROLE_SUPER_ADMIN') AND $entity->getUser() != $this->getUser()){
            return $returnError('Это не Ваша модель', '');
        }

        $entity->setDeleted(true);
        $em->flush($entity);

        return JsonResponse::create(["error"=>false, 'modelInfo'=>'Модель удалена']);
    }

    /**
     * @Route("/catalog/{alias}/", name="catalog_category")
     */
    public function categoryAction(Request $request, $alias)
    {
        $em = $this->getDoctrine()->getManager();
        $category = $em->getRepository('AppBundle:Category')->findOneBy(['alias'=>$alias, "active"=>true]);

        if(!$category){
            throw $this->createNotFoundException('Category not found');
        }

        $categories = [];
        $categories[] = $category->getId();
        if(count($category->getChildren()) > 0){
            foreach($category->getChildren() as $e){
                $categories[] = $e->getId();
            }
        }

        $responseData = [];
        $responseData["category"] = $category;
        $responseData["products"] = $em->getRepository('AppBundle:Product')->getByCategories($categories);

        $html = $this->get('templating')->render('AppBundle:Catalog:category.html.twig', $responseData);
        return new Response($html, Response::HTTP_OK);
    }

    /**
     * @Route("/product/{alias}/", name="catalog_product")
     * @Template()
     */
    public function productAction(Request $request, $alias)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('AppBundle:Product')->findOneBy(['alias'=>$alias, "active"=>true]);

        if(!$product){
            throw $this->createNotFoundException('Product not found');
        }

        $product->setViews($product->getViews()+1);
        $em->flush($product);

        if($product->getUser()){
            $product->getUser()->setModelsLoadedView($product->getUser()->getModelsLoadedView()+1);
            $em->flush($product->getUser());
        }

        $user = $this->getUser();

        $productFile = null;
        $files = $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$product]);
        if(isset($files[0])){
            $productFile = $files[0];
        }

        return [
            "product"=>$product,
            "alreadyBuy"=>$em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$product, "user"=>$user]),
            "alreadyLike"=>$em->getRepository('AppBundle:ProductLike')->findOneBy(['product'=>$product, "user"=>$user]),
            "alreadyFavorite"=>$em->getRepository('AppBundle:ProductFavorite')->findOneBy(['product'=>$product, "user"=>$user]),
            "productFile" => $productFile,
            "settings" => $em->getRepository('AppBundle:Setting')->findOneBy([]),
            "comments" => $em->getRepository('AppBundle:ProductComment')->findBy(["product"=>$product], ["date"=>"ASC"])
        ];
    }

    /**
     * @Route("/product/{alias}/file/{file}/", name="catalog_product_file")
     * @Template()
     */
    public function productFileAction(Request $request, $alias, $file)
    {
        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();
        $product = $em->getRepository('AppBundle:Product')->findOneBy(['alias'=>$alias, "active"=>true]);

        if(!$product){
            throw $this->createNotFoundException('File not found');
        }

        $alreadyBuy = $em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$product, "user"=>$user]);

        if(!$alreadyBuy){
            throw $this->createNotFoundException('File not found');
        }

        $fileEntity = $em->getRepository('AppBundle:ProductFile')->find($file);

        if(!$fileEntity OR $fileEntity->getProduct() != $product){
            throw $this->createNotFoundException('File not found');
        }

        $filepath = $this->get('kernel')->getRootDir().'/../web/uploads/images/'.$fileEntity->getNameFile();
        $filepath = realpath($filepath);

        if(!$filepath){
            throw $this->createNotFoundException('File not found');
        }

        $response = new BinaryFileResponse($filepath);
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

        return $response;
    }

    /**
     * @Route("/product/{id}/popup/", name="catalog_product_popup")
     * @Template()
     */
    public function productPopupAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('AppBundle:Product')->findOneBy(['id'=>$id, "active"=>true]);

        if(!$product){
            throw $this->createNotFoundException('Product not found');
        }

        $product->setViews($product->getViews()+1);
        $em->flush($product);

        if($product->getUser()){
            $product->getUser()->setModelsLoadedView($product->getUser()->getModelsLoadedView()+1);
            $em->flush($product->getUser());
        }

        $user = $this->getUser();

        return [
            "product"=>$product,
            "alreadyBuy"=>$em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$product, "user"=>$user]),
            "alreadyLike"=>$em->getRepository('AppBundle:ProductLike')->findOneBy(['product'=>$product, "user"=>$user]),
            "alreadyFavorite"=>$em->getRepository('AppBundle:ProductFavorite')->findOneBy(['product'=>$product, "user"=>$user]),
            "files" => $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$product])
        ];
    }

    /**
     * @Route("/product/{alias}/edit/", name="catalog_product_edit")
     * @Template()
     */
    public function productEditAction(Request $request, $alias)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('AppBundle:Product')->findOneBy(['alias'=>$alias, "active"=>true]);

        if(!$product){
            throw $this->createNotFoundException('Product not found');
        }

        $user = $this->getUser();

        if(!$this->isGranted('ROLE_SUPER_ADMIN') AND $product->getUser() != $user){
            throw $this->createNotFoundException('Product not found');
        }

        return [
            "product"=>$product,
            "files" => $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$product]),
            "categories"=>$em->getRepository('AppBundle:Category')->findBy(["parent"=>NULL],["pos"=>"ASC"]),
            "tags"=>$em->getRepository('AppBundle:Tag')->findBy(["active"=>true],["name"=>"ASC"]),
            "software"=>$em->getRepository('AppBundle:Software')->findBy(["active"=>true],["name"=>"ASC"])
        ];
    }

    /**
     * @Route("/product/{alias}/edit/write/", name="catalog_product_edit_write", options={"expose"=true})
     */
    public function productEditWriteAction(Request $request, $alias)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Product')->findOneBy(['alias'=>$alias, "active"=>true]);

        if(!$entity){
            return JsonResponse::create(["error" => true, 'error_text'=>'Модель не найдена']);
        }

        $name = trim($request->get('name'));
        $categoryId = trim($request->get('category'));
        $mainImg = $request->get('mainImg');
        $addImg = $request->get('addImg');
        $files = $request->get('files');
        $existsMainImg = $request->get('existsMainImg');
        $existsAddImg = $request->get('existsAddImg');
        $existsFiles = $request->get('existsFiles');
        $manufacturer = trim($request->get('manufacturer'));
        $tags = $request->get('tags');
        $software = $request->get('software');
        $text = trim($request->get('text'));

        if($name == '' OR $categoryId == ''){
            return JsonResponse::create(["error" => true, 'error_text'=>'Заполните обязательные поля']);
        }

        $category = $em->getRepository('AppBundle:Category')->find($categoryId);

        if(!is_array($mainImg)){
            $mainImg = [];
        }
        if(!is_array($addImg)){
            $addImg = [];
        }
        if(!is_array($files)){
            $files = [];
        }
        if(!is_array($existsMainImg)){
            $existsMainImg = [];
        }
        if(!is_array($existsAddImg)){
            $existsAddImg = [];
        }
        if(!is_array($existsFiles)){
            $existsFiles = [];
        }

        if(!$category){
            return JsonResponse::create(["error" => true, 'error_text'=>'Категория не найдена']);
        }

        if(count($mainImg) == 0 AND count($existsMainImg) == 0){
            return JsonResponse::create(["error" => true, 'error_text'=>'Загрузите изображения к модели']);
        }

        if(count($files) == 0 AND count($existsFiles) == 0){
            return JsonResponse::create(["error" => true, 'error_text'=>'Загрузите файлы модели']);
        }

        if(count($mainImg) > 0){
            $fileEntity = $em->getRepository('AppBundle:ProductFile')->find($mainImg[0]);

            $file = $this->get('kernel')->getRootDir().'/../web/uploads/images/'.$fileEntity->getNameFile();

            $mediaMain = new Media;
            $mediaMain->setBinaryContent($file);
            $mediaMain->setContext('product');
            $mediaMain->setProviderName('sonata.media.provider.image');

            $mediaManager = $this->get('sonata.media.manager.media');
            $mediaManager->save($mediaMain);

            $entity->setImage($mediaMain);
        }

        $lastAddImgPos = 0;

        $existsAddImagesEntities = $em->getRepository('AppBundle:ProductImage')->findBy(["product"=>$entity], ["pos"=>"ASC"]);
        foreach ($existsAddImagesEntities as $e){
            $lastAddImgPos = $e->getPos();

            if(!in_array($e->getId(), $existsAddImg)){
                $em->remove($e);
                $em->flush($e);
            }
        }

        $pos = $lastAddImgPos;

        for ($i=0;$i<count($addImg);$i++){
            $pos++;

            $fileEntity = $em->getRepository('AppBundle:ProductFile')->find($addImg[$i]);

            $file = $this->get('kernel')->getRootDir().'/../web/uploads/images/'.$fileEntity->getNameFile();

            $media = new Media;
            $media->setBinaryContent($file);
            $media->setContext('product');
            $media->setProviderName('sonata.media.provider.image');

            $mediaManager = $this->get('sonata.media.manager.media');
            $mediaManager->save($media);

            $productImage = new ProductImage();
            $productImage->setPos($pos);
            $productImage->setImage($media);
            $productImage->setProduct($entity);

            $em->persist($productImage);
            $em->flush($productImage);
        }

        $existsFilesEntities = $em->getRepository('AppBundle:ProductFile')->findBy(["product"=>$entity]);

        foreach ($existsFilesEntities as $e){
            if(!in_array($e->getId(), $existsFiles)){
                $em->remove($e);
                $em->flush($e);
            }
        }

        foreach ($files as $e){

            $file = $em->getRepository('AppBundle:ProductFile')->find($e);

            if($file){
                if($file->getType() == 'file'){
                    $file->setProduct($entity);
                    $em->persist($file);
                    $em->flush($file);
                }
                elseif($file->getType() == 'image'){
                    $em->remove($file);
                    $em->flush($file);
                }
            }

        }

        $entity->setCategory($category);
        $entity->setName($name);
        $entity->setManufacturer($manufacturer);
        $entity->setText($text);

        $em->flush($entity);

        $curTags = [];
        foreach ($entity->getTags() as $e) {
            $curTags[] = $e->getId();
        }

        if(is_array($tags)){
            foreach($tags as $e){
                $tagEntity = $em->getRepository('AppBundle:Tag')->findOneby(["name"=>$e]);
                if(!$tagEntity){
                    $tagEntity = new Tag();
                    $tagEntity->setActive(true);
                    $tagEntity->setName($e);

                    $em->persist($tagEntity);
                    $em->flush($tagEntity);
                }

                if(!in_array($tagEntity->getId(), $curTags)){
                    $entity->addTag($tagEntity);
                }
            }
            $em->flush($entity);
        }

        $curSoftware = [];
        foreach ($entity->getSoftware() as $e) {
            $curSoftware[] = $e->getId();
        }

        if(is_array($software)){
            foreach($software as $e){
                $softwareEntity = $em->getRepository('AppBundle:Software')->find($e);
                if($softwareEntity){
                    if(!in_array($softwareEntity->getId(), $curSoftware)){
                        $entity->addSoftware($softwareEntity);
                    }
                }
            }
            $em->flush($entity);
        }

        return JsonResponse::create(["error" => false, 'url'=>$this->generateUrl('catalog_product',["alias"=>$entity->getAlias()])]);
    }

    /**
     * @Route("/product/buy/write/", name="product_buy_write", options={"expose"=true})
     */
    public function buyWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        $id = intval($request->get('id'));

        $product = $em->getRepository('AppBundle:Product')->findOneBy(['id'=>$id, "active"=>true]);

        if(!$product){
            return $returnError('Модель не найдена','email');
        }

        $user = $this->getUser();

        $alreadyBuy = $em->getRepository('AppBundle:Buy')->findOneBy(['product'=>$product, "user"=>$user]);

        if($alreadyBuy){
            return $returnError('Вы уже купили данную модель','email');
        }

        if($user->getModels() == 0){
            return $returnError('У Вас не хватает оплаченных моделей для покупки','email');
        }

        $transaction = new PaymentLog();
        $transaction->setDate(new \DateTime());
        $transaction->setUser($user);
        $transaction->setPrice(-1);
        $transaction->setName('Покупка модели "'.$product->getName().'"');
        $transaction->setType('buy');

        $em->persist($transaction);
        $em->flush($transaction);

        $models = $user->getModels();
        $models -= 1;

        $user->setModels($models);

        $this->get("fos_user.user_manager")->updateUser($user);

        $product->setDownloads($product->getDownloads()+1);
        $em->persist($product);
        $em->flush($product);

        $author = $product->getUser();

        if($author){
            $author->setModelsLoadedBuy($author->getModelsLoadedBuy()+1);
            $em->persist($author);
            $em->flush($author);
        }

        $buy = new Buy();
        $buy->setDate(new \DateTime());
        $buy->setUser($user);
        $buy->setProduct($product);
        $buy->setPrice(1);

        $em->persist($buy);
        $em->flush($buy);

        $settings = $this->getDoctrine()->getRepository('AppBundle:Setting')->findOneBy([]);

        $price = intval($settings->getModelPrice()/2);

        $transaction = new PaymentLog();
        $transaction->setDate(new \DateTime());
        $transaction->setUser($author);
        $transaction->setPrice($price);
        $transaction->setName('Коммисия с покупки модели "'.$product->getName().'"');
        $transaction->setType('sell');

        $em->persist($transaction);
        $em->flush($transaction);

        $balance = $author->getBalance();
        $balance += $price;
        $author->setBalance($balance);

        $this->get("fos_user.user_manager")->updateUser($author);

        $this->get('wp.notify.manager')->sendBuyModelEmail($product, $user);
        $this->get('wp.notify.manager')->sendBuyModelInfoEmail($product, $user);

        $productFile = null;
        $files = $em->getRepository('AppBundle:ProductFile')->findBy(['product'=>$product]);
        if(isset($files[0])){
            $productFile = $files[0];
        }

        $dataToRender = [];
        $dataToRender["product"] = $product;
        $dataToRender["productFile"] = $productFile;

        $html = $this->renderView('@App/Catalog/_product_files.html.twig', $dataToRender);

        return JsonResponse::create(["error"=>false, "html"=>$html]);
    }

    /**
     * @Route("/product/actions/like/", name="product_like", options={"expose"=true})
     */
    public function likeAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        if(!$user){
            return $returnError('Вы должны войти на сайт','email');
        }

        $id = intval($request->get('id'));

        $product = $em->getRepository('AppBundle:Product')->findOneBy(['id'=>$id, "active"=>true]);

        if(!$product){
            return $returnError('Модель не найдена','email');
        }

        $user = $this->getUser();

        $alreadyLike = $em->getRepository('AppBundle:ProductLike')->findOneBy(['product'=>$product, "user"=>$user]);

        if($alreadyLike){
            if($product->getStars() > 0){
                $product->setStars($product->getStars() - 1);
                $em->flush($product);
            }

            $em->remove($alreadyLike);
            $em->flush($alreadyLike);

            $status = false;
        }
        else{
            $like = new ProductLike();
            $like->setProduct($product);
            $like->setUser($user);

            $em->persist($like);
            $em->flush($like);

            $product->setStars($product->getStars() + 1);
            $em->flush($product);

            $status = true;
        }

        return JsonResponse::create(["error"=>false, 'likes'=>$product->getStars(), 'active'=>$status]);
    }

    /**
     * @Route("/product/actions/favorite/", name="product_favorite", options={"expose"=true})
     */
    public function favoriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        if(!$user){
            return $returnError('Вы должны войти на сайт','email');
        }

        $id = intval($request->get('id'));

        $product = $em->getRepository('AppBundle:Product')->findOneBy(['id'=>$id, "active"=>true]);

        if(!$product){
            return $returnError('Модель не найдена','email');
        }

        $user = $this->getUser();

        $alreadyFavorite = $em->getRepository('AppBundle:ProductFavorite')->findOneBy(['product'=>$product, "user"=>$user]);

        if($alreadyFavorite){
            $em->remove($alreadyFavorite);
            $em->flush($alreadyFavorite);

            $status = false;
        }
        else{
            $like = new ProductFavorite();
            $like->setProduct($product);
            $like->setUser($user);

            $em->persist($like);
            $em->flush($like);

            $status = true;
        }

        $count = count($em->getRepository('AppBundle:ProductFavorite')->findBy(["user"=>$user]));

        $user->setModelsFavorites($count);
        $this->get("fos_user.user_manager")->updateUser($user);

        return JsonResponse::create(["error"=>false, 'active'=>$status]);
    }

    /**
     * @Route("/product/comment/write/", name="product_comment_write", options={"expose"=true})
     */
    public function commentWriteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        if(!$user){
            return $returnError('Вы должны войти на сайт','email');
        }

        $id = intval($request->get('id'));
        $text = trim($request->get('text', 'text'));

        if($text == ''){
            return $returnError('Напишите комментарий','email');
        }

        $product = $em->getRepository('AppBundle:Product')->findOneBy(['id'=>$id, "active"=>true]);

        if(!$product){
            return $returnError('Модель не найдена','email');
        }

        $user = $this->getUser();

        $comment = new ProductComment();
        $comment->setProduct($product);
        $comment->setUser($user);
        $comment->setDate(new \DateTime());
        $comment->setText($text);

        $em->persist($comment);
        $em->flush($comment);

        $comments = $em->getRepository('AppBundle:ProductComment')->findBy(["product"=>$product], ["date"=>"ASC"]);

        $product->setComments(count($comments));
        $em->flush($product);

        if($product->getUser()){
            $product->getUser()->setModelsLoadedComments($product->getUser()->getModelsLoadedComments()+1);
            $em->flush($product->getUser());
        }

        $this->get('wp.notify.manager')->sendAdminAddCommentEmail($comment);

        $responseData = [];
        $responseData["comments"] = $comments;

        $html = $this->renderView('@App/Catalog/_product_comments.html.twig', $responseData);

        return JsonResponse::create(["error"=>false, 'html'=>$html]);
    }

    /**
     * @Route("/product/comment/delete/", name="product_comment_delete", options={"expose"=true})
     */
    public function commentDeleteAction(Request $request)
    {

        $returnError = function ($text, $error_type) {
            return new JsonResponse(['error' => 1, 'error_text' => $text, 'error_type' => $error_type],
                Response::HTTP_OK);
        };

        if(!$this->isGranted('ROLE_SUPER_ADMIN')){
            return $returnError('У Вас нет права на управление комментариями', '');
        }

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();

        if(!$user){
            return $returnError('Вы должны войти на сайт','email');
        }

        $id = intval($request->get('id'));

        $comment = $em->getRepository('AppBundle:ProductComment')->findOneBy(['id'=>$id]);

        if(!$comment){
            return $returnError('Комментарий не найден','email');
        }

        $product = $comment->getProduct();

        if(!$product){
            return $returnError('Модель не найдена','email');
        }

        $em->remove($comment);
        $em->flush($comment);

        $comments = $em->getRepository('AppBundle:ProductComment')->findBy(["product"=>$product], ["date"=>"ASC"]);

        $product->setComments(count($comments));
        $em->flush($product);

        if($product->getUser()){
            $product->getUser()->setModelsLoadedComments($product->getUser()->getModelsLoadedComments()+1);
            $em->flush($product->getUser());
        }

        $responseData = [];
        $responseData["comments"] = $comments;

        $html = $this->renderView('@App/Catalog/_product_comments.html.twig', $responseData);

        return JsonResponse::create(["error"=>false, 'html'=>$html]);
    }

    private function _generateAlias($str) {
        $rus = array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я');
        $lat = array('A', 'B', 'V', 'G', 'D', 'E', 'E', 'Zh', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'C', 'Ch', 'Sh', 'Sch', 'Y', 'Y', 'Y', 'E', 'Yu', 'Ya', 'a', 'b', 'v', 'g', 'd', 'e', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', '', 'e', 'yu', 'ya');
        $str = str_replace($rus, $lat, mb_strtolower(trim($str)));
        $str = preg_replace('{[^a-z0-9-]}', '-', $str);
        $str = preg_replace('{-+}', '-', $str);
        $str = trim($str, '-');
        return $str;
    }

}
