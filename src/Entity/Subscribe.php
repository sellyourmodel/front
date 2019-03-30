<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Subscribe
 *
 * @ORM\Table(name="subscribes")
 * @ORM\Entity
 */
class Subscribe
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
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @var integer
     *
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $date;

    public function __toString()
    {
        return $this->getEmail();
    }

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
     * Set email
     *
     * @param string $email
     *
     * @return Subscribe
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Subscribe
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }
}
