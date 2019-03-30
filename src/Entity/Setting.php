<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Setting
 *
 * @ORM\Table(name="settings")
 * @ORM\Entity
 */
class Setting
{
    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="email_sender", type="string", length=255)
     */
    private $emailSender;

    /**
     * @var string
     *
     * @ORM\Column(name="email_email", type="string", length=255)
     */
    private $emailEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="email_admin", type="string", length=255)
     */
    private $emailAdmin;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelPrice;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }




    /**
     * Set emailSender
     *
     * @param string $emailSender
     *
     * @return Setting
     */
    public function setEmailSender($emailSender)
    {
        $this->emailSender = $emailSender;

        return $this;
    }

    /**
     * Get emailSender
     *
     * @return string
     */
    public function getEmailSender()
    {
        return $this->emailSender;
    }

    /**
     * Set emailEmail
     *
     * @param string $emailEmail
     *
     * @return Setting
     */
    public function setEmailEmail($emailEmail)
    {
        $this->emailEmail = $emailEmail;

        return $this;
    }

    /**
     * Get emailEmail
     *
     * @return string
     */
    public function getEmailEmail()
    {
        return $this->emailEmail;
    }

    /**
     * Set emailAdmin
     *
     * @param string $emailAdmin
     *
     * @return Setting
     */
    public function setEmailAdmin($emailAdmin)
    {
        $this->emailAdmin = $emailAdmin;

        return $this;
    }

    /**
     * Get emailAdmin
     *
     * @return string
     */
    public function getEmailAdmin()
    {
        return $this->emailAdmin;
    }

    /**
     * Set modelPrice
     *
     * @param integer $modelPrice
     *
     * @return Setting
     */
    public function setModelPrice($modelPrice)
    {
        $this->modelPrice = $modelPrice;

        return $this;
    }

    /**
     * Get modelPrice
     *
     * @return integer
     */
    public function getModelPrice()
    {
        return $this->modelPrice;
    }
}
