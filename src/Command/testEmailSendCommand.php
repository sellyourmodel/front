<?php

namespace App\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class testEmailSendCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:test:email:send')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $this->getContainer()->get('wp.notify.manager')->sendTestMessage();

        return 0;
    }

}
