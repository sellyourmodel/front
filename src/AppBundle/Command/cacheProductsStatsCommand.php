<?php

namespace AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use AppBundle\Entity\Product;

class cacheProductsStatsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:cache:products:stats')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();

        $connection = $em->getConnection();

        $software = $em->getRepository('AppBundle:Software')->findAll();

        foreach ($software as $e){
            $statement = $connection->prepare("SELECT s.* FROM catalog_products_software s RIGHT JOIN catalog_products p ON s.product_id=p.id WHERE s.software_id={$e->getId()} AND p.moderated=1 AND p.block=0 AND p.deleted=0");
            $statement->execute();
            $results = $statement->fetchAll();

            $e->setCount(count($results));
            $em->flush($e);
        }


        $styles = $em->getRepository('AppBundle:Style')->findAll();

        foreach ($styles as $e){
            $statement = $connection->prepare("SELECT s.* FROM catalog_products_styles s RIGHT JOIN catalog_products p ON s.product_id=p.id WHERE s.style_id={$e->getId()} AND p.moderated=1 AND p.block=0 AND p.deleted=0");
            $statement->execute();
            $results = $statement->fetchAll();

            $e->setCount(count($results));
            $em->flush($e);
        }


        return 0;
    }

}
