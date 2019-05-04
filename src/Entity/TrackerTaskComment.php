<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TrackerTaskComment
 *
 * @ORM\Table(name="tracker_tasks_comments")
 * @ORM\Entity()
 */
class TrackerTaskComment
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
     * @ORM\ManyToOne(targetEntity="TrackerTask")
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
     * @return TrackerTaskComment
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
     * @return TrackerTaskComment
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
     * @return TrackerTaskComment
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
     * @param \App\Entity\TrackerTask $ticket
     *
     * @return TrackerTaskComment
     */
    public function setTrackerTask(\App\Entity\TrackerTask $ticket = null)
    {
        $this->ticket = $ticket;

        return $this;
    }

    /**
     * Get ticket
     *
     * @return \App\Entity\TrackerTask
     */
    public function getTrackerTask()
    {
        return $this->ticket;
    }

    public function getTicket(): ?TrackerTask
    {
        return $this->ticket;
    }

    public function setTicket(?TrackerTask $ticket): self
    {
        $this->ticket = $ticket;

        return $this;
    }
}
