<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Notify
 *
 * @ORM\Table(name="notify")
 * @ORM\Entity
 */
class Notify
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
     * @ORM\ManyToOne(targetEntity="User", inversedBy="orders")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="orders")
     * @ORM\JoinColumn(name="user2_id", referencedColumnName="id", nullable=true)
     */
    private $user2;

    /**
     * @ORM\ManyToOne(targetEntity="Product", inversedBy="orders")
     * @ORM\JoinColumn(name="product_id", referencedColumnName="id", nullable=true)
     */
    private $product;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $type;

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
    private $active = true;

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
     * @return Notify
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

    public function getDateStr()
    {
        if($this->date){

            switch($this->date->format('m')){
                case "01":
                    $m = 'января';
                    break;
                case "02":
                    $m = 'февраля';
                    break;
                case "03":
                    $m = 'марта';
                    break;
                case "04":
                    $m = 'апреля';
                    break;
                case "05":
                    $m = 'мая';
                    break;
                case "06":
                    $m = 'июня';
                    break;
                case "07":
                    $m = 'июля';
                    break;
                case "08":
                    $m = 'августа';
                    break;
                case "09":
                    $m = 'сентября';
                    break;
                case "10":
                    $m = 'октября';
                    break;
                case "11":
                    $m = 'ноября';
                    break;
                case "12":
                    $m = 'декабря';
                    break;
            }

            return $this->date->format('d') ." {$m} ".$this->date->format('Y');
        }
        else{
            return '';
        }
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return Notify
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
     * Set active
     *
     * @param boolean $active
     *
     * @return Notify
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * Get active
     *
     * @return boolean
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Set user
     *
     * @param \App\Entity\User $user
     *
     * @return Notify
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
     * Set isRead
     *
     * @param boolean $isRead
     *
     * @return Notify
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

    /**
     * Set type
     *
     * @param string $type
     *
     * @return Notify
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set user2
     *
     * @param \App\Entity\User $user2
     *
     * @return Notify
     */
    public function setUser2(\App\Entity\User $user2 = null)
    {
        $this->user2 = $user2;

        return $this;
    }

    /**
     * Get user2
     *
     * @return \App\Entity\User
     */
    public function getUser2()
    {
        return $this->user2;
    }

    /**
     * Set product
     *
     * @param \App\Entity\Product $product
     *
     * @return Notify
     */
    public function setProduct(\App\Entity\Product $product = null)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get product
     *
     * @return \App\Entity\Product
     */
    public function getProduct()
    {
        return $this->product;
    }
}
