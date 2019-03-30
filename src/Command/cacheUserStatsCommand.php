<?php

namespace App\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class cacheUserStatsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:cache:user:stats')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();

        $connection = $em->getConnection();

        $users = $em->getRepository('App:User')->findAll();
        foreach ($users as $user){
            $modelsModerated = count($em->getRepository('App:Product')->findBy(["user"=>$user, "moderated"=>true]));
            $modelsNoModerated = count($em->getRepository('App:Product')->findBy(["user"=>$user, "moderated"=>false]));

            $statement = $connection->prepare("SELECT COUNT(*) as count FROM catalog_products_favorites f INNER JOIN catalog_products p ON f.product_id=p.id WHERE f.user_id={$user->getId()} AND f.product_id IS NOT NULL AND p.deleted=0");
            $statement->execute();
            $results = $statement->fetchAll();
            $modelsFavorites = $results[0]["count"];

            $balance = 0;
            $payments = $em->getRepository('App:PaymentLog')->findBy(["user"=>$user]);
            foreach ($payments as $e){
                $balance += $e->getPrice();
            }

            $user->setModelsLoaded($modelsModerated);
            $user->setModelsModeration($modelsNoModerated);
            $user->setModelsFavorites($modelsFavorites);
            $user->setBalance($balance);

            $em->flush($user);

        }




        return 0;
    }

}
