<?php

namespace App\Entity;

use App\Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Intl\Locale;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ORM\Table(name="catalog_products")
 * @ORM\HasLifecycleCallbacks()
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
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
    private $nameEn;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $alias;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $manufacturer;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $manufacturerEn;

    /**
     * @ORM\ManyToMany(targetEntity="Tag")
     * @ORM\JoinTable(name="catalog_products_tags",
     *      joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="tag_id", referencedColumnName="id")}
     *      )
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity="Software")
     * @ORM\JoinTable(name="catalog_products_software",
     *      joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="software_id", referencedColumnName="id")}
     *      )
     */
    private $software;

    /**
     * @ORM\ManyToMany(targetEntity="Style")
     * @ORM\JoinTable(name="catalog_products_styles",
     *      joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="style_id", referencedColumnName="id")}
     *      )
     */
    private $style;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="orders")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $user;

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
     * @ORM\Column(type="text", nullable=true)
     */
    private $textEn;

    /**
     * @ORM\ManyToOne(targetEntity="App\Application\Sonata\MediaBundle\Entity\Media", fetch="EAGER")
     * @ORM\JoinColumn(name="image_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    private $image;

    /**
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="products")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id", nullable=true)
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="Category")
     * @ORM\JoinTable(name="catalog_categories_products")
     **/
    private $categories;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $downloads = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $views = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $comments = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $stars = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean")
     */
    private $active = true;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean")
     */
    private $deleted = false;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean")
     */
    private $moderated = false;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean")
     */
    private $paidAuthor = false;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean")
     */
    private $block = false;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $blockReason;

    /**
     * @ORM\OneToMany(targetEntity="ProductImage", mappedBy="product", cascade={"persist"}, orphanRemoval=true)
     * @ORM\OrderBy({"pos" = "ASC"})
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity="ProductLog", mappedBy="product", cascade={"persist"}, orphanRemoval=true)
     * @ORM\OrderBy({"date" = "DESC"})
     */
    private $log;

    public function __toString()
    {
        return $this->getName();
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->software = new ArrayCollection();
        $this->style = new ArrayCollection();
        $this->log = new ArrayCollection();
        $this->categories = new ArrayCollection();
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
     * Add image
     *
     * @param ProductImage $image
     *
     * @return Product
     */
    public function addImage(ProductImage $image)
    {
        $image->setProduct($this);

        $this->images[] = $image;

        return $this;
    }

    /**
     * Remove image
     *
     * @param ProductImage $image
     */
    public function removeImage(ProductImage $image)
    {
        $this->images->removeElement($image);
    }

    /**
     * Get images
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * Set active
     *
     * @param boolean $active
     *
     * @return Product
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
     * Set text
     *
     * @param string $text
     *
     * @return Product
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
     * Set name
     *
     * @param string $name
     *
     * @return Product
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
     * Set image
     *
     * @param \App\Application\Sonata\MediaBundle\Entity\Media $image
     *
     * @return Product
     */
    public function setImage(\App\Application\Sonata\MediaBundle\Entity\Media $image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return \App\Application\Sonata\MediaBundle\Entity\Media
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set category
     *
     * @param \App\Entity\Category $category
     *
     * @return Product
     */
    public function setCategory(\App\Entity\Category $category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return \App\Entity\Category
     */
    public function getCategory()
    {
        return $this->category;
    }


    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Product
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
     * Set user
     *
     * @param \App\Entity\User $user
     *
     * @return Product
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
     * Set manufacturer
     *
     * @param string $manufacturer
     *
     * @return Product
     */
    public function setManufacturer($manufacturer)
    {
        $this->manufacturer = $manufacturer;

        return $this;
    }

    /**
     * Get manufacturer
     *
     * @return string
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }

    /**
     * Add tag
     *
     * @param \App\Entity\Tag $tag
     *
     * @return Product
     */
    public function addTag(\App\Entity\Tag $tag)
    {
        $this->tags[] = $tag;

        return $this;
    }

    /**
     * Remove tag
     *
     * @param \App\Entity\Tag $tag
     */
    public function removeTag(\App\Entity\Tag $tag)
    {
        $this->tags->removeElement($tag);
    }

    /**
     * Get tags
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Add software
     *
     * @param \App\Entity\Software $software
     *
     * @return Product
     */
    public function addSoftware(\App\Entity\Software $software)
    {
        $this->software[] = $software;

        return $this;
    }

    /**
     * Remove software
     *
     * @param \App\Entity\Software $software
     */
    public function removeSoftware(\App\Entity\Software $software)
    {
        $this->software->removeElement($software);
    }

    /**
     * Get software
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSoftware()
    {
        return $this->software;
    }

    /**
     * Set views
     *
     * @param integer $views
     *
     * @return Product
     */
    public function setViews($views)
    {
        $this->views = $views;

        return $this;
    }

    /**
     * Get views
     *
     * @return integer
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * Set comments
     *
     * @param integer $comments
     *
     * @return Product
     */
    public function setComments($comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get comments
     *
     * @return integer
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set stars
     *
     * @param integer $stars
     *
     * @return Product
     */
    public function setStars($stars)
    {
        $this->stars = $stars;

        return $this;
    }

    /**
     * Get stars
     *
     * @return integer
     */
    public function getStars()
    {
        return $this->stars;
    }

    /**
     * Set downloads
     *
     * @param integer $downloads
     *
     * @return Product
     */
    public function setDownloads($downloads)
    {
        $this->downloads = $downloads;

        return $this;
    }

    /**
     * Get downloads
     *
     * @return integer
     */
    public function getDownloads()
    {
        return $this->downloads;
    }

    /**
     * Set alias
     *
     * @param string $alias
     *
     * @return Product
     */
    public function setAlias($alias)
    {
        $this->alias = $alias;

        return $this;
    }

    /**
     * Get alias
     *
     * @return string
     */
    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * Set moderated
     *
     * @param boolean $moderated
     *
     * @return Product
     */
    public function setModerated($moderated)
    {
        $this->moderated = $moderated;

        return $this;
    }

    /**
     * Get moderated
     *
     * @return boolean
     */
    public function getModerated()
    {
        return $this->moderated;
    }

    /**
     * Set block
     *
     * @param boolean $block
     *
     * @return Product
     */
    public function setBlock($block)
    {
        $this->block = $block;

        return $this;
    }

    /**
     * Get block
     *
     * @return boolean
     */
    public function getBlock()
    {
        return $this->block;
    }

    /**
     * Set blockReason
     *
     * @param string $blockReason
     *
     * @return Product
     */
    public function setBlockReason($blockReason)
    {
        $this->blockReason = $blockReason;

        return $this;
    }

    /**
     * Get blockReason
     *
     * @return string
     */
    public function getBlockReason()
    {
        return $this->blockReason;
    }

    /**
     * Set deleted
     *
     * @param boolean $deleted
     *
     * @return Product
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * Get deleted
     *
     * @return boolean
     */
    public function getDeleted()
    {
        return $this->deleted;
    }

    /**
     * Add style
     *
     * @param \App\Entity\Style $style
     *
     * @return Product
     */
    public function addStyle(\App\Entity\Style $style)
    {
        $this->style[] = $style;

        return $this;
    }

    /**
     * Remove style
     *
     * @param \App\Entity\Style $style
     */
    public function removeStyle(\App\Entity\Style $style)
    {
        $this->style->removeElement($style);
    }

    /**
     * Get style
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getStyle()
    {
        return $this->style;
    }

    /**
     * Add log
     *
     * @param \App\Entity\ProductLog $log
     *
     * @return Product
     */
    public function addLog(\App\Entity\ProductLog $log)
    {
        $this->log[] = $log;

        return $this;
    }

    /**
     * Remove log
     *
     * @param \App\Entity\ProductLog $log
     */
    public function removeLog(\App\Entity\ProductLog $log)
    {
        $this->log->removeElement($log);
    }

    /**
     * Get log
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getLog()
    {
        return $this->log;
    }

    public function getPaidAuthor(): ?bool
    {
        return $this->paidAuthor;
    }

    public function setPaidAuthor(bool $paidAuthor): self
    {
        $this->paidAuthor = $paidAuthor;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getNameLocale()
    {
        $locale = Locale::getDefault();
        if($locale == 'en'){
            return $this->nameEn;
        }
        return $this->name;
    }

    public function getNameEn(): ?string
    {
        return $this->nameEn;
    }

    public function setNameEn(string $nameEn): self
    {
        $this->nameEn = $nameEn;

        return $this;
    }

    /**
     * Get manufacturer
     *
     * @return string
     */
    public function getManufacturerLocale()
    {
        /*$locale = Locale::getDefault();
        if($locale == 'en'){
            return $this->manufacturerEn;
        }*/
        return $this->manufacturer;
    }

    public function getManufacturerEn(): ?string
    {
        return $this->manufacturerEn;
    }

    public function setManufacturerEn(string $manufacturerEn): self
    {
        $this->manufacturerEn = $manufacturerEn;

        return $this;
    }

    /**
     * Get text
     *
     * @return string
     */
    public function getTextLocale()
    {
        $locale = Locale::getDefault();
        if($locale == 'en'){
            return $this->textEn;
        }
        return $this->text;
    }

    public function getTextEn(): ?string
    {
        return $this->textEn;
    }

    public function setTextEn(?string $textEn): self
    {
        $this->textEn = $textEn;

        return $this;
    }

    /**
     * Add category
     *
     * @param \App\Entity\Category $category
     *
     * @return Product
     */
    public function addCategory(\App\Entity\Category $category)
    {
        $this->categories[] = $category;

        return $this;
    }

    /**
     * Remove category
     *
     * @param \App\Entity\Category $category
     */
    public function removeCategory(\App\Entity\Category $category)
    {
        $this->categories->removeElement($category);
    }

    /**
     * Get categories
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCategories()
    {
        return $this->categories;
    }
}
