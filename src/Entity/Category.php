<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Intl\Locale;

/**
 * Category
 *
 * @ORM\Table(name="catalog_categories")
 * @ORM\Entity
 */
class Category
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
     * @var integer
     *
     * @ORM\Column(name="col_number", type="integer", nullable=false)
     */
    private $colNumber;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $alias;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $pos;

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
     * @ORM\OneToMany(targetEntity="Category", mappedBy="parent", cascade={"all"}, orphanRemoval=true)
     * @ORM\OrderBy({"pos" = "ASC"})
     */
    private $children;

    /**
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", nullable=true)
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="Product", mappedBy="category", cascade={"all"}, orphanRemoval=true)
     **/
    private $products;

    /**
     * @var integer
     *
     * @ORM\Column(name="products_count", type="integer", nullable=false)
     */
    private $productsCount = 0;

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

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    /**
     * toString for sonataAdminBundle breadcrumbs.
     *
     * @return string
     */
    public function __toString()
    {

        $name = $this->name;
        $name = str_replace('<br />',', ', $name);

        if($this->parent){
            $parentName = $this->parent->getName();
            $parentName = str_replace('<br />',', ', $parentName);
            $name = $parentName.' / '.$name;
        }

        return $name;
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
     * @return Category
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

    /**
     * @return boolean
     */
    public function isTwoLines()
    {
        if(strstr($this->name, '<br />')){
            return true;
        }
        else{
            return false;
        }
    }


    /**
     * Set text
     *
     * @param string $text
     *
     * @return Category
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
     * @return Category
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
     * Add child
     *
     * @param \App\Entity\Category $child
     *
     * @return Category
     */
    public function addChild(\App\Entity\Category $child)
    {
        $this->children[] = $child;

        return $this;
    }

    /**
     * Remove child
     *
     * @param \App\Entity\Category $child
     */
    public function removeChild(\App\Entity\Category $child)
    {
        $this->children->removeElement($child);
    }

    /**
     * Get children
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Set parent
     *
     * @param \App\Entity\Category $parent
     *
     * @return Category
     */
    public function setParent(\App\Entity\Category $parent = null)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return \App\Entity\Category
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Add product
     *
     * @param \App\Entity\Product $product
     *
     * @return Category
     */
    public function addProduct(\App\Entity\Product $product)
    {
        $this->products[] = $product;

        return $this;
    }

    /**
     * Remove product
     *
     * @param \App\Entity\Product $product
     */
    public function removeProduct(\App\Entity\Product $product)
    {
        $this->products->removeElement($product);
    }

    /**
     * Get products
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * Set pos
     *
     * @param integer $pos
     *
     * @return Category
     */
    public function setPos($pos)
    {
        $this->pos = $pos;

        return $this;
    }

    /**
     * Get pos
     *
     * @return integer
     */
    public function getPos()
    {
        return $this->pos;
    }

    /**
     * Set colNumber
     *
     * @param integer $colNumber
     *
     * @return Category
     */
    public function setColNumber($colNumber)
    {
        $this->colNumber = $colNumber;

        return $this;
    }

    /**
     * Get colNumber
     *
     * @return integer
     */
    public function getColNumber()
    {
        return $this->colNumber;
    }

    /**
     * Set alias
     *
     * @param string $alias
     *
     * @return Category
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
     * Set nameEn
     *
     * @param string $nameEn
     *
     * @return Category
     */
    public function setNameEn($nameEn)
    {
        $this->nameEn = $nameEn;

        return $this;
    }

    /**
     * Get nameEn
     *
     * @return string
     */
    public function getNameEn()
    {
        return $this->nameEn;
    }

    public function getProductsCount(): ?int
    {
        return $this->productsCount;
    }

    public function setProductsCount(int $productsCount): self
    {
        $this->productsCount = $productsCount;

        return $this;
    }
}
