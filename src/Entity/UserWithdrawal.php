<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserWithdrawal
 *
 * @ORM\Table(name="users_withdrawals")
 * @ORM\Entity
 */
class UserWithdrawal
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
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $status = 'new';

    /**
     * @ORM\ManyToOne(targetEntity="UserWithdrawalMethod")
     * @ORM\JoinColumn(name="method_id", referencedColumnName="id", nullable=true)
     */
    private $method;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $account;

    /**
     * toString for sonataAdminBundle breadcrumbs.
     *
     * @return string
     */
    public function __toString()
    {
        return "Заявка №".$this->id;
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
     * Get id
     *
     * @return integer
     */
    public function getNameAdmin()
    {
        return "Заявка №".$this->id;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return UserWithdrawal
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
     * @return UserWithdrawal
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
     * @return UserWithdrawal
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
     * Set status
     *
     * @param string $status
     *
     * @return UserWithdrawal
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set method
     *
     * @param string $method
     *
     * @return UserWithdrawal
     */
    public function setMethod($method)
    {
        $this->method = $method;

        return $this;
    }

    /**
     * Get method
     *
     * @return string
     */
    public function getMethod()
    {
        return $this->method;
    }

    /**
     * Set account
     *
     * @param string $account
     *
     * @return UserWithdrawal
     */
    public function setAccount($account)
    {
        $this->account = $account;

        return $this;
    }

    /**
     * Get account
     *
     * @return string
     */
    public function getAccount()
    {
        return $this->account;
    }
}
