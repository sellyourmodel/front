<?php

namespace App\Command;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class checkEmailConfirmCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:check:email:confirm')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();
        $notifyManager = $this->getContainer()->get('wp.notify.manager');

        $connection = $em->getConnection();

        $users = $em->getRepository('App:User')->findNotConfirmedEmails();

        /** @var User $e */
        foreach ($users as $e) {
            $e->setLocked(true);
            $em->flush($e);
            $notifyManager->sendBlockByRegistrationEmail($e);
        }


        return 0;
    }

}
