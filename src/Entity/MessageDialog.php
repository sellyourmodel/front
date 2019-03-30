<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Stringy\Stringy as S;

/**
 * MessageDialog
 *
 * @ORM\Table("messages_dialogs")
 * @ORM\Entity(repositoryClass="App\Repository\MessageDialogRepository")
 */
class MessageDialog
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
     * @ORM\JoinColumn(name="from_id", referencedColumnName="id", onDelete="CASCADE")
     */
    private $from;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="to_id", referencedColumnName="id", onDelete="CASCADE")
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    public function __toString()
    {
        return $this->name;
    }

    private function _plural($number, $suffix)
    {
        $keys = array(2, 0, 1, 1, 1, 2);
        $mod = $number % 100;
        $suffix_key = ($mod > 7 && $mod < 20) ? 2 : $keys[min($mod % 10, 5)];
        return $suffix[$suffix_key];
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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return MessageDialog
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

    public function getDateAgo()
    {

        $ptime = $this->date->getTimestamp();

        $etime = time() - $ptime;

        if ($etime < 61) {
            return 'сейчас';
        }

        $a = array(365 * 24 * 60 * 60 => 'year',
            30 * 24 * 60 * 60 => 'month',
            24 * 60 * 60 => 'day',
            60 * 60 => 'hour',
            60 => 'minute',
            1 => 'second'
        );
        $a_plural = array('year' => ["год", "года", "лет"],
            'month' => ["месяц", "месяца", "месяцев"],
            'day' => ["день", "дня", "дней"],
            'hour' => ["час", "часа", "часов"],
            'minute' => ["минуту", "минуты", "минут"],
            'second' => ["секунду", "секунды", "секунд"]
        );

        foreach ($a as $secs => $str) {
            $d = $etime / $secs;
            if ($d >= 1) {
                $r = round($d);
                return $r . ' ' . $this->_plural($r, $a_plural[$str]) . ' назад';
            }
        }
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return MessageDialog
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return MessageDialog
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
     * @return MessageDialog
     */
    public function setFrom(\App\Entity\User $from = null)
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
     * @return MessageDialog
     */
    public function setTo(\App\Entity\User $to = null)
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
}
