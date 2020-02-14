<?php

namespace App\Controller;

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
        $em = $this->getDoctrine()->getManager();

        $search = $request->get('search');

        $results = [];

        $finder = $this->container->get('fos_elastica.finder.app.catalog');
        $boolQuery = new \Elastica\Query\BoolQuery();

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('moderated', true);
        $boolQuery->addMust($fieldQuery);

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('block', false);
        $boolQuery->addMust($fieldQuery);

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('deleted', false);
        $boolQuery->addMust($fieldQuery);

        if($search OR mb_strlen($search) > 0) {
            $fieldQuery = new \Elastica\Query\Match();
            $fieldQuery->setFieldQuery('name', $search);
            //$fieldQuery->setFieldParam('name', 'type', 'phrase_prefix');
            $boolQuery->addMust($fieldQuery);
        }

        $software = $request->get('software');

        if(is_array($software) AND count($software)>0){
            $softwareNames = [];
            foreach ($software as $eId){
                $eId = intval($eId);
                $softwareNames[] = $eId;
            }

            $fieldQuery = new \Elastica\Query\Terms();
            $fieldQuery->setTerms('software', $softwareNames);
            $boolQuery->addMust($fieldQuery);
        }

        $style = $request->get('style');

        if(is_array($style) AND count($style)>0){
            $styleNames = [];
            foreach ($style as $eId){
                $eId = intval($eId);
                $styleNames[] = $eId;
            }

            $fieldQuery = new \Elastica\Query\Terms();
            $fieldQuery->setTerms('style', $styleNames);
            $boolQuery->addMust($fieldQuery);
        }

        $sort = $request->get('sort', 'date');

        $finalQuery = new \Elastica\Query($boolQuery);

        $finalQuery->setSize(10000);

        if($sort == 'date'){
            $finalQuery->setSort(array('date' => array('order' => 'DESC')));
        }elseif($sort == 'comments'){
            $finalQuery->setSort(array('comments' => array('order' => 'DESC')));
        }elseif($sort == 'views'){
            $finalQuery->setSort(array('views' => array('order' => 'DESC')));
        }else{
            $finalQuery->setSort(array('date' => array('order' => 'DESC')));
        }

        $results = $finder->find($finalQuery);

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

        $finder = $this->container->get('fos_elastica.finder.app.catalog');
        $boolQuery = new \Elastica\Query\BoolQuery();

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('moderated', true);
        $boolQuery->addMust($fieldQuery);

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('block', false);
        $boolQuery->addMust($fieldQuery);

        $fieldQuery = new \Elastica\Query\Term();
        $fieldQuery->setTerm('deleted', false);
        $boolQuery->addMust($fieldQuery);

        $fieldQuery = new \Elastica\Query\Match();
        $fieldQuery->setFieldQuery('name', $search);
        //$fieldQuery->setFieldParam('name', 'type', 'phrase_prefix');
        $boolQuery->addMust($fieldQuery);

        $software = $request->get('software');

        if(is_array($software) AND count($software)>0){
            $softwareNames = [];
            foreach ($software as $eId){
                $eId = intval($eId);
                $softwareNames[] = $eId;
            }

            $fieldQuery = new \Elastica\Query\Terms();
            $fieldQuery->setTerms('software', $softwareNames);
            $boolQuery->addMust($fieldQuery);
        }

        $style = $request->get('style');

        if(is_array($style) AND count($style)>0){
            $styleNames = [];
            foreach ($style as $eId){
                $eId = intval($eId);
                $styleNames[] = $eId;
            }

            $fieldQuery = new \Elastica\Query\Terms();
            $fieldQuery->setTerms('style', $styleNames);
            $boolQuery->addMust($fieldQuery);
        }

        $sort = $request->get('sort', 'date');

        $finalQuery = new \Elastica\Query($boolQuery);

        if($sort == 'date'){
            $finalQuery->setSort(array('date' => array('order' => 'DESC')));
        }elseif($sort == 'comments'){
            $finalQuery->setSort(array('comments' => array('order' => 'DESC')));
        }elseif($sort == 'views'){
            $finalQuery->setSort(array('views' => array('order' => 'DESC')));
        }else{
            $finalQuery->setSort(array('date' => array('order' => 'DESC')));
        }

        $results = $finder->find($boolQuery);

        return [
            "products"=>$results
        ];
    }
}
