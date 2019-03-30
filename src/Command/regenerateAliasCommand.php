<?php

namespace App\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Product;

class regenerateAliasCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wp:alias:regenerate')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->getContainer()->get('doctrine')->getManager();

        $entities = $em->getRepository('App:Product')->findAll();

        foreach ($entities as $e){
            $e->setAlias($this->_generateAlias($e->getName()).'-'.$e->getId());

            $em->flush($e);
        }

        $entities = $em->getRepository('App:Category')->findAll();

        foreach ($entities as $e){
            $e->setAlias($this->_generateAlias($e->getName()).'-'.$e->getId());

            $em->flush($e);
        }

        return 0;
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
