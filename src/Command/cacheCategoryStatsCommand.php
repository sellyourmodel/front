<?php

namespace App\Command;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class cacheCategoryStatsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:cache:category:stats')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();

        $categories = $em->getRepository('App:Category')->findAll();

        /** @var Category $category */
        foreach ($categories as $category){
            $categories = [];
            $categories[] = $category->getId();
            if (count($category->getChildren()) > 0) {
                foreach ($category->getChildren() as $e) {
                    $categories[] = $e->getId();
                }
            }
            $productsCount = count($em->getRepository('App:Product')->getByCategories($categories, [], []));
            $category->setProductsCount($productsCount);
            $output->writeln($category->getId());
        }

        $output->writeln("Save changes");

        $em->flush();

        $output->writeln("Done");


        return 0;
    }

}
