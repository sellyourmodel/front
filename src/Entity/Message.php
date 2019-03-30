<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Message
 *
 * @ORM\Table(name="messages")
 * @ORM\Entity(repositoryClass="App\Repository\MessageRepository")
 */
class Message
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
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="from_id", referencedColumnName="id", nullable=false)
     */
    private $from;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="to_id", referencedColumnName="id", nullable=false)
     */
    private $to;

    /**
     * @var string
     *
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean")
     */
    private $isRead = false;

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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Message
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

    /**
     * Set text
     *
     * @param string $text
     *
     * @return Message
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set from
     *
     * @param \App\Entity\User $from
     *
     * @return Message
     */
    public function setFrom(\App\Entity\User $from)
    {
        $this->from = $from;

        return $this;
    }

    /**
     * Get from
     *
     * @return \App\Entity\User
     */
    public function getFrom()
    {
        return $this->from;
    }

    /**
     * Set to
     *
     * @param \App\Entity\User $to
     *
     * @return Message
     */
    public function setTo(\App\Entity\User $to)
    {
        $this->to = $to;

        return $this;
    }

    /**
     * Get to
     *
     * @return \App\Entity\User
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Set isRead
     *
     * @param boolean $isRead
     *
     * @return Message
     */
    public function setIsRead($isRead)
    {
        $this->isRead = $isRead;

        return $this;
    }

    /**
     * Get isRead
     *
     * @return boolean
     */
    public function getIsRead()
    {
        return $this->isRead;
    }
}
