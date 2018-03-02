<?php

namespace AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use AppBundle\Entity\Product;

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

        $em = $this->getContainer()->get('doctrine')->getManager();

        $message = \Swift_Message::newInstance()
            ->setContentType("text/html")
            ->setSubject('Тестовое сообщение')
            ->setTo("ivanov@web-premier.ru")
            ->setFrom($this->getContainer()->getParameter('mailer_user'))
            ->setBody('Тест отправки письма', 'text/html');

        $this->getContainer()->get('mailer')->send($message);
        return 0;
    }

}
