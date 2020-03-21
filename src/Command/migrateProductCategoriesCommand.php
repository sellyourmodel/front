<?php

namespace App\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class migrateProductCategoriesCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:migrate:product:categories')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();

        $entities = $em->getRepository('App:Product')->findAll();

        /** @var Product $e */
        foreach ($entities as $e){
            $e->addCategory($e->getCategory());
            $output->writeln($e->getId());
        }

        $output->writeln("Save changes");

        $em->flush();

        $output->writeln("Done");

        return 0;
    }

}
