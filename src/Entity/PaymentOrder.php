<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * PaymentOrder
 *
 * @ORM\Table(name="users_payments_orders")
 * @ORM\Entity
 */
class PaymentOrder
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
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="orders")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Product")
     * @ORM\JoinColumn(name="product_id", referencedColumnName="id", nullable=true)
     */
    private $product;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $count;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean")
     */
    private $useAccountBalance = true;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=true)
     */
    private $accountBalanceSum;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean")
     */
    private $finished = false;

    /**
     * @var string
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $finishedDate;

    /**
     * toString for sonataAdminBundle breadcrumbs.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->name;
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
     * @return PaymentOrder
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
     * Set price
     *
     * @param integer $price
     *
     * @return PaymentOrder
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return integer
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set user
     *
     * @param \App\Entity\User $user
     *
     * @return PaymentOrder
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
     * Set count
     *
     * @param integer $count
     *
     * @return PaymentOrder
     */
    public function setCount($count)
    {
        $this->count = $count;

        return $this;
    }

    /**
     * Get count
     *
     * @return integer
     */
    public function getCount()
    {
        return $this->count;
    }

    /**
     * Set finished
     *
     * @param boolean $finished
     *
     * @return PaymentOrder
     */
    public function setFinished($finished)
    {
        $this->finished = $finished;

        return $this;
    }

    /**
     * Get finished
     *
     * @return boolean
     */
    public function getFinished()
    {
        return $this->finished;
    }

    /**
     * Set finishedDate
     *
     * @param \DateTime $finishedDate
     *
     * @return PaymentOrder
     */
    public function setFinishedDate($finishedDate)
    {
        $this->finishedDate = $finishedDate;

        return $this;
    }

    /**
     * Get finishedDate
     *
     * @return \DateTime
     */
    public function getFinishedDate()
    {
        return $this->finishedDate;
    }

    /**
     * Set useAccountBalance
     *
     * @param boolean $useAccountBalance
     *
     * @return PaymentOrder
     */
    public function setUseAccountBalance($useAccountBalance)
    {
        $this->useAccountBalance = $useAccountBalance;

        return $this;
    }

    /**
     * Get useAccountBalance
     *
     * @return boolean
     */
    public function getUseAccountBalance()
    {
        return $this->useAccountBalance;
    }

    /**
     * Set accountBalanceSum
     *
     * @param integer $accountBalanceSum
     *
     * @return PaymentOrder
     */
    public function setAccountBalanceSum($accountBalanceSum)
    {
        $this->accountBalanceSum = $accountBalanceSum;

        return $this;
    }

    /**
     * Get accountBalanceSum
     *
     * @return integer
     */
    public function getAccountBalanceSum()
    {
        return $this->accountBalanceSum;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }
}
