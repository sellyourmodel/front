<?php

namespace App\Command;

use App\Entity\City;
use App\Entity\Country;
use App\Entity\Region;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Validator\Constraints\Date;

class loadCountriesFromCsvCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('sym:load:countries')
            ->setDescription('')
            ->setHelp(<<<EOF

EOF
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $em = $this->getContainer()->get('doctrine')->getManager();

        $file = __DIR__ . '/country.csv';

        if (($handle = fopen($file, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {

                $country = new Country();
                $country->setCode($data[1]);
                $country->setName($data[3]);
                $country->setNameEn($data[4]);
                $country->setNumberFile($data[0]);
                $country->setTimeZone($data[7]);

                $em->persist($country);
                $em->flush($country);


            }
            fclose($handle);

        }

        return 0;
    }

}
