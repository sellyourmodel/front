<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TicketComment
 *
 * @ORM\Table(name="tickets_comments")
 * @ORM\Entity()
 */
class TicketComment
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Ticket")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ticket_id", referencedColumnName="id", onDelete="CASCADE")
     * })
     */
    private $ticket;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $user;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @var string
     *
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $date;

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
     * Set user
     *
     * @param \App\Entity\User $user
     *
     * @return TicketComment
     */
    public function setUser(\App\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \App\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return TicketComment
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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return TicketComment
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
     * Set ticket
     *
     * @param \App\Entity\Ticket $ticket
     *
     * @return TicketComment
     */
    public function setTicket(\App\Entity\Ticket $ticket = null)
    {
        $this->ticket = $ticket;

        return $this;
    }

    /**
     * Get ticket
     *
     * @return \App\Entity\Ticket
     */
    public function getTicket()
    {
        return $this->ticket;
    }
}
