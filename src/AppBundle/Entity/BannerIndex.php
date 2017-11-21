<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BannerIndex
 *
 * @ORM\Table(name="banners_index")
 * @ORM\Entity
 */
class BannerIndex
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
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $info;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $link;

    /**
     * @ORM\ManyToOne(targetEntity="Application\Sonata\MediaBundle\Entity\Media", fetch="EAGER")
     * @ORM\JoinColumn(name="icon_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    private $icon;

    /**
     * @ORM\ManyToOne(targetEntity="Application\Sonata\MediaBundle\Entity\Media", fetch="EAGER")
     * @ORM\JoinColumn(name="bg_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    private $bg;

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
     * Set name
     *
     * @param string $name
     *
     * @return BannerIndex
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
     * Set link
     *
     * @param string $link
     *
     * @return BannerIndex
     */
    public function setLink($link)
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Get link
     *
     * @return string
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * Set icon
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media $icon
     *
     * @return BannerIndex
     */
    public function setIcon(\Application\Sonata\MediaBundle\Entity\Media $icon = null)
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Get icon
     *
     * @return \Application\Sonata\MediaBundle\Entity\Media
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * Set bg
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media $bg
     *
     * @return BannerIndex
     */
    public function setBg(\Application\Sonata\MediaBundle\Entity\Media $bg = null)
    {
        $this->bg = $bg;

        return $this;
    }

    /**
     * Get bg
     *
     * @return \Application\Sonata\MediaBundle\Entity\Media
     */
    public function getBg()
    {
        return $this->bg;
    }

    /**
     * Set info
     *
     * @param string $info
     *
     * @return BannerIndex
     */
    public function setInfo($info)
    {
        $this->info = $info;

        return $this;
    }

    /**
     * Get info
     *
     * @return string
     */
    public function getInfo()
    {
        return $this->info;
    }
}
