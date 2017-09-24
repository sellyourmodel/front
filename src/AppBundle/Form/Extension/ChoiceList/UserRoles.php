<?php

namespace AppBundle\Form\Extension\ChoiceList;

use Symfony\Component\Form\Extension\Core\ChoiceList\SimpleChoiceList;

class UserRoles extends SimpleChoiceList
{
    const ADMIN = 'Администратор';
    const USER = 'Пользователь';

    public function __construct()
    {
        $choices =  array(
            'ROLE_SUPER_ADMIN' => self::ADMIN,
            'ROLE_USER' => self::USER,
        );
        parent::__construct($choices);
    }
}
