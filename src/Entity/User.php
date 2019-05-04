<?php
namespace App\Entity;

use App\Application\Sonata\MediaBundle\Entity\Media;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="users")
 * @ORM\HasLifecycleCallbacks()
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lvl;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nickname;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $emailNeedCheck = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $emailConfirmCode;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $emailConfirm = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $f;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $i;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $o;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $lastNotifyView = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $balance = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $models = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsLoaded = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsModeration = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsFavorites = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsLoadedView = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsLoadedComments = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="integer", nullable=false)
     */
    private $modelsLoadedBuy = 0;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $notifySale = true;

    /**
     * @var string
     *
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $notifyNews = true;

    /**
     * @var string
     *
     * @ORM\Column(type="date", nullable=true)
     */
    private $birthdate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Application\Sonata\MediaBundle\Entity\Media", fetch="EAGER")
     * @ORM\JoinColumn(name="image_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    private $image;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gender;

    /**
     * @var string
     *
     * @ORM\Column(type="array", nullable=true)
     */
    private $languages;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $specialization;

    /**
     * @ORM\ManyToOne(targetEntity="Country", fetch="EAGER")
     * @ORM\JoinColumn(name="country_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $postalCode;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone;

    /** @ORM\Column(name="user_type", type="string", length=255, nullable=true) */
    protected $userType;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $facebook_id;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $facebook_access_token;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $vkontakte_id;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $vkontakte_access_token;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $google_id;

    /** @ORM\Column(type="string", length=255, nullable=true) */
    protected $google_access_token;

    /**
     * @var datetime
     *
     * @ORM\Column(name="created_at",type="datetime")
     */
    private $createdAt;
    /**
     * @var datetime
     *
     * @ORM\Column(name="updated_at", type="datetime")
     */
    private $updatedAt;

    public function __construct()
    {
        parent::__construct();

        //$this->services = new ArrayCollection();
    }

    public function __toString()
    {

        return $this->getName();

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

    public function setEmail($email)
    {
        if (is_null($email)) {
            $this->setUsername(uniqid());
        } else {
            $this->setUsername($email);
        }

        return parent::setEmail($email);
    }

    public function haveEmail(){
        if(filter_var($this->email,FILTER_VALIDATE_EMAIL)){
            return true;
        }
        else{
            return false;
        }
    }

    public function getNameProfileMini(){
        if($this->name){
            return $this->name;
        }
        elseif(filter_var($this->email,FILTER_VALIDATE_EMAIL)){
            return $this->email;
        }
        else{
            return 'Пользователь';
        }
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getRoleName()
    {
        if ($this->hasRole('ROLE_SUPER_ADMIN')) {
            return "Администратор";
        }
        if ($this->hasRole('ROLE_EDITOR')) {
            return "Редактор";
        }
        if ($this->hasRole('ROLE_OPERATOR')) {
            return "Оператор";
        }
        if ($this->hasRole('ROLE_USER')) {
            return "Пользователь";
        }
        return "Не определено";
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return User
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
     * Set createdAt
     *
     * @param \DateTime $createdAt
     *
     * @return User
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     *
     * @return User
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set f
     *
     * @param string $f
     *
     * @return User
     */
    public function setF($f)
    {
        $this->f = $f;

        $this->_buildName();

        return $this;
    }

    /**
     * Get f
     *
     * @return string
     */
    public function getF()
    {
        return $this->f;
    }

    /**
     * Set i
     *
     * @param string $i
     *
     * @return User
     */
    public function setI($i)
    {
        $this->i = $i;

        $this->_buildName();

        return $this;
    }

    /**
     * Get i
     *
     * @return string
     */
    public function getI()
    {
        return $this->i;
    }

    /**
     * Set o
     *
     * @param string $o
     *
     * @return User
     */
    public function setO($o)
    {
        $this->o = $o;

        $this->_buildName();

        return $this;
    }

    /**
     * Get o
     *
     * @return string
     */
    public function getO()
    {
        return $this->o;
    }

    private function _buildName(){

        $this->f = trim($this->f);
        $this->i = trim($this->i);
        $this->o = trim($this->o);

        $a = [];
        if($this->i <> ''){
            $a[] = $this->i;
        }
        if($this->f <> ''){
            $a[] = $this->f;
        }

        $this->name = implode(' ', $a);

    }

    /**
     * Set postalCode
     *
     * @param string $postalCode
     *
     * @return User
     */
    public function setPostalCode($postalCode)
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    /**
     * Get postalCode
     *
     * @return string
     */
    public function getPostalCode()
    {
        return $this->postalCode;
    }

    /**
     * Set address
     *
     * @param string $address
     *
     * @return User
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set phone
     *
     * @param string $phone
     *
     * @return User
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set userType
     *
     * @param string $userType
     *
     * @return User
     */
    public function setUserType($userType)
    {
        $this->userType = $userType;

        return $this;
    }

    /**
     * Get userType
     *
     * @return string
     */
    public function getUserType()
    {
        return $this->userType;
    }

    /**
     * Set facebookId
     *
     * @param string $facebookId
     *
     * @return User
     */
    public function setFacebookId($facebookId)
    {
        $this->facebook_id = $facebookId;

        return $this;
    }

    /**
     * Get facebookId
     *
     * @return string
     */
    public function getFacebookId()
    {
        return $this->facebook_id;
    }

    /**
     * Set facebookAccessToken
     *
     * @param string $facebookAccessToken
     *
     * @return User
     */
    public function setFacebookAccessToken($facebookAccessToken)
    {
        $this->facebook_access_token = $facebookAccessToken;

        return $this;
    }

    /**
     * Get facebookAccessToken
     *
     * @return string
     */
    public function getFacebookAccessToken()
    {
        return $this->facebook_access_token;
    }

    /**
     * Set vkontakteId
     *
     * @param string $vkontakteId
     *
     * @return User
     */
    public function setVkontakteId($vkontakteId)
    {
        $this->vkontakte_id = $vkontakteId;

        return $this;
    }

    /**
     * Get vkontakteId
     *
     * @return string
     */
    public function getVkontakteId()
    {
        return $this->vkontakte_id;
    }

    /**
     * Set vkontakteAccessToken
     *
     * @param string $vkontakteAccessToken
     *
     * @return User
     */
    public function setVkontakteAccessToken($vkontakteAccessToken)
    {
        $this->vkontakte_access_token = $vkontakteAccessToken;

        return $this;
    }

    /**
     * Get vkontakteAccessToken
     *
     * @return string
     */
    public function getVkontakteAccessToken()
    {
        return $this->vkontakte_access_token;
    }


    /**
     * Set googleId
     *
     * @param string $googleId
     *
     * @return User
     */
    public function setGoogleId($googleId)
    {
        $this->google_id = $googleId;

        return $this;
    }

    /**
     * Get googleId
     *
     * @return string
     */
    public function getGoogleId()
    {
        return $this->google_id;
    }

    /**
     * Set googleAccessToken
     *
     * @param string $googleAccessToken
     *
     * @return User
     */
    public function setGoogleAccessToken($googleAccessToken)
    {
        $this->google_access_token = $googleAccessToken;

        return $this;
    }

    /**
     * Get googleAccessToken
     *
     * @return string
     */
    public function getGoogleAccessToken()
    {
        return $this->google_access_token;
    }

    /**
     * Set nickname
     *
     * @param string $nickname
     *
     * @return User
     */
    public function setNickname($nickname)
    {
        $this->nickname = $nickname;

        return $this;
    }

    /**
     * Get nickname
     *
     * @return string
     */
    public function getNickname()
    {
        return $this->nickname;
    }

    /**
     * Set gender
     *
     * @param string $gender
     *
     * @return User
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set languages
     *
     * @param array $languages
     *
     * @return User
     */
    public function setLanguages($languages)
    {
        $this->languages = $languages;

        return $this;
    }

    /**
     * Get languages
     *
     * @return array
     */
    public function getLanguages()
    {
        return $this->languages;
    }

    /**
     * Set specialization
     *
     * @param string $specialization
     *
     * @return User
     */
    public function setSpecialization($specialization)
    {
        $this->specialization = $specialization;

        return $this;
    }

    /**
     * Get specialization
     *
     * @return string
     */
    public function getSpecialization()
    {
        return $this->specialization;
    }

    /**
     * Set city
     *
     * @param string $city
     *
     * @return User
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return User
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
     * Set image
     *
     * @param \App\Application\Sonata\MediaBundle\Entity\Media $image
     *
     * @return User
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
     * Set country
     *
     * @param \App\Entity\Country $country
     *
     * @return User
     */
    public function setCountry(\App\Entity\Country $country = null)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return \App\Entity\Country
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set birthdate
     *
     * @param \DateTime $birthdate
     *
     * @return User
     */
    public function setBirthdate($birthdate)
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    /**
     * Get birthdate
     *
     * @return \DateTime
     */
    public function getBirthdate()
    {
        return $this->birthdate;
    }

    /**
     * Set models
     *
     * @param integer $models
     *
     * @return User
     */
    public function setModels($models)
    {
        $this->models = $models;

        return $this;
    }

    /**
     * Get models
     *
     * @return integer
     */
    public function getModels()
    {
        return $this->models;
    }

    /**
     * Set modelsLoaded
     *
     * @param integer $modelsLoaded
     *
     * @return User
     */
    public function setModelsLoaded($modelsLoaded)
    {
        $this->modelsLoaded = $modelsLoaded;

        return $this;
    }

    /**
     * Get modelsLoaded
     *
     * @return integer
     */
    public function getModelsLoaded()
    {
        return $this->modelsLoaded;
    }

    /**
     * Set modelsLoadedView
     *
     * @param integer $modelsLoadedView
     *
     * @return User
     */
    public function setModelsLoadedView($modelsLoadedView)
    {
        $this->modelsLoadedView = $modelsLoadedView;

        return $this;
    }

    /**
     * Get modelsLoadedView
     *
     * @return integer
     */
    public function getModelsLoadedView()
    {
        return $this->modelsLoadedView;
    }

    /**
     * Set modelsLoadedComments
     *
     * @param integer $modelsLoadedComments
     *
     * @return User
     */
    public function setModelsLoadedComments($modelsLoadedComments)
    {
        $this->modelsLoadedComments = $modelsLoadedComments;

        return $this;
    }

    /**
     * Get modelsLoadedComments
     *
     * @return integer
     */
    public function getModelsLoadedComments()
    {
        return $this->modelsLoadedComments;
    }

    /**
     * Set modelsLoadedBuy
     *
     * @param integer $modelsLoadedBuy
     *
     * @return User
     */
    public function setModelsLoadedBuy($modelsLoadedBuy)
    {
        $this->modelsLoadedBuy = $modelsLoadedBuy;

        return $this;
    }

    /**
     * Get modelsLoadedBuy
     *
     * @return integer
     */
    public function getModelsLoadedBuy()
    {
        return $this->modelsLoadedBuy;
    }

    /**
     * Set modelsFavorites
     *
     * @param integer $modelsFavorites
     *
     * @return User
     */
    public function setModelsFavorites($modelsFavorites)
    {
        $this->modelsFavorites = $modelsFavorites;

        return $this;
    }

    /**
     * Get modelsFavorites
     *
     * @return integer
     */
    public function getModelsFavorites()
    {
        return $this->modelsFavorites;
    }

    /**
     * Set lvl
     *
     * @param string $lvl
     *
     * @return User
     */
    public function setLvl($lvl)
    {
        $this->lvl = $lvl;

        return $this;
    }

    /**
     * Get lvl
     *
     * @return string
     */
    public function getLvl()
    {
        return $this->lvl;
    }

    /**
     * Set lastNotifyView
     *
     * @param integer $lastNotifyView
     *
     * @return User
     */
    public function setLastNotifyView($lastNotifyView)
    {
        $this->lastNotifyView = $lastNotifyView;

        return $this;
    }

    /**
     * Get lastNotifyView
     *
     * @return integer
     */
    public function getLastNotifyView()
    {
        return $this->lastNotifyView;
    }

    /**
     * Set balance
     *
     * @param integer $balance
     *
     * @return User
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;

        return $this;
    }

    /**
     * Get balance
     *
     * @return integer
     */
    public function getBalance()
    {
        return $this->balance;
    }

    /**
     * Set notifySale
     *
     * @param boolean $notifySale
     *
     * @return User
     */
    public function setNotifySale($notifySale)
    {
        $this->notifySale = $notifySale;

        return $this;
    }

    /**
     * Get notifySale
     *
     * @return boolean
     */
    public function getNotifySale()
    {
        return $this->notifySale;
    }

    /**
     * Set notifyNews
     *
     * @param boolean $notifyNews
     *
     * @return User
     */
    public function setNotifyNews($notifyNews)
    {
        $this->notifyNews = $notifyNews;

        return $this;
    }

    /**
     * Get notifyNews
     *
     * @return boolean
     */
    public function getNotifyNews()
    {
        return $this->notifyNews;
    }

    /**
     * Set emailNeedCheck
     *
     * @param boolean $emailNeedCheck
     *
     * @return User
     */
    public function setEmailNeedCheck($emailNeedCheck)
    {
        $this->emailNeedCheck = $emailNeedCheck;

        return $this;
    }

    /**
     * Get emailNeedCheck
     *
     * @return boolean
     */
    public function getEmailNeedCheck()
    {
        return $this->emailNeedCheck;
    }

    /**
     * Set emailConfirmCode
     *
     * @param string $emailConfirmCode
     *
     * @return User
     */
    public function setEmailConfirmCode($emailConfirmCode)
    {
        $this->emailConfirmCode = $emailConfirmCode;

        return $this;
    }

    /**
     * Get emailConfirmCode
     *
     * @return string
     */
    public function getEmailConfirmCode()
    {
        return $this->emailConfirmCode;
    }

    /**
     * Set emailConfirm
     *
     * @param boolean $emailConfirm
     *
     * @return User
     */
    public function setEmailConfirm($emailConfirm)
    {
        $this->emailConfirm = $emailConfirm;

        return $this;
    }

    /**
     * Get emailConfirm
     *
     * @return boolean
     */
    public function getEmailConfirm()
    {
        return $this->emailConfirm;
    }

    /**
     * Set modelsModeration
     *
     * @param integer $modelsModeration
     *
     * @return User
     */
    public function setModelsModeration($modelsModeration)
    {
        $this->modelsModeration = $modelsModeration;

        return $this;
    }

    /**
     * Get modelsModeration
     *
     * @return integer
     */
    public function getModelsModeration()
    {
        return $this->modelsModeration;
    }
}
