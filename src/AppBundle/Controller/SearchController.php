<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SearchController extends Controller
{
    /**
     * @Route("/search/", name="search", options={"expose"=true})
     * @Template()
     */
    public function indexAction(Request $request)
    {
        $search = $request->get('search');

        $results = [];

        if(!$search OR mb_strlen($search) >= 3){

            /*$finder = $this->container->get('fos_elastica.finder.app.catalog');
            $results = $finder->like($search);*/

            $finder = $this->container->get('fos_elastica.finder.app.catalog');
            $boolQuery = new \Elastica\Query\BoolQuery();

            $fieldQuery = new \Elastica\Query\Match();
            $fieldQuery->setFieldQuery('name', $search);
            $fieldQuery->setFieldParam('name', 'type', 'phrase_prefix');
            $boolQuery->addMust($fieldQuery);

            /*$tagsQuery = new \Elastica\Query\Terms();
            $tagsQuery->setTerms('tags', array('tag1', 'tag2'));
            $boolQuery->addShould($tagsQuery);

            $categoryQuery = new \Elastica\Query\Terms();
            $categoryQuery->setTerms('categoryIds', array('1', '2', '3'));
            $boolQuery->addMust($categoryQuery);*/

            $results = $finder->find($boolQuery);

        }

        return [
            "products"=>$results
        ];
    }

    /**
     * @Route("/search/quick/", name="search_quick", options={"expose"=true})
     * @Template()
     */
    public function quickAction(Request $request)
    {

        $search = $request->get('search');

        if(!$search OR mb_strlen($search) < 3){
            return Response::create('');
        }

        /*$finder = $this->container->get('fos_elastica.finder.app.catalog');
        $results = $finder->like($search);*/

        $finder = $this->container->get('fos_elastica.finder.app.catalog');
        $boolQuery = new \Elastica\Query\BoolQuery();

        $fieldQuery = new \Elastica\Query\Match();
        $fieldQuery->setFieldQuery('name', $search);
        $fieldQuery->setFieldParam('name', 'type', 'phrase_prefix');
        $boolQuery->addMust($fieldQuery);

        /*$tagsQuery = new \Elastica\Query\Terms();
        $tagsQuery->setTerms('tags', array('tag1', 'tag2'));
        $boolQuery->addShould($tagsQuery);

        $categoryQuery = new \Elastica\Query\Terms();
        $categoryQuery->setTerms('categoryIds', array('1', '2', '3'));
        $boolQuery->addMust($categoryQuery);*/

        $results = $finder->find($boolQuery);

        return [
            "products"=>$results
        ];
    }
}
