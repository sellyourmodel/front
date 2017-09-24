<?php
namespace AppBundle\Security\Core\User;

use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\FOSUBUserProvider as BaseClass;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Imagine\Image\Point;
use Imagine\Image\ImageInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\PropertyAccess\PropertyAccessor;
use FOS\UserBundle\Model\UserManagerInterface;

class FOSUBUserProvider extends BaseClass
{

    protected $session;

    /**
     * {@inheritDoc}
     */
    public function __construct(UserManagerInterface $userManager, array $properties, $session)
    {
        $this->session = $session;
        parent::__construct($userManager, $properties);
    }

    /**
     * {@inheritDoc}
     */
    public function connect(UserInterface $user, UserResponseInterface $response)
    {
        $property = $this->getProperty($response);
        $username = $response->getUsername();

        //on connect - get the access token and the user ID
        $service = $response->getResourceOwner()->getName();

        $setter = 'set' . ucfirst($service);
        $setter_id = $setter . 'Id';
        $setter_token = $setter . 'AccessToken';

        $previousUser = $this->userManager->findUserBy(array($property => $username));

        if($previousUser){
            $this->session->getFlashBag()->add('notice','Выбранный аккаунт в соц. сети уже привязан к другому аккаунту в личном кабинете');
        }
        else{

            //we connect current user
            $user->$setter_id($username);
            $user->$setter_token($response->getAccessToken());
            $user->setUserType($service);

            /*if($user->getImage() == NULL){

                $data = $response->getResponse();

                // Facebook
                if ($service == 'facebook') {
                    if($data["picture"]["data"]["url"]){
                        //$avatar = $this->getAvatarFromUrl($data["picture"]["data"]["url"]);
                        //$user->setImage($avatar);
                    }

                }
                // VK
                if ($service == 'vkontakte') {
                    if($data["response"][0]["photo_medium"]){
                        //$avatar = $this->getAvatarFromUrl($data["response"][0]["photo_medium"]);
                        //$user->setImage($avatar);
                    }
                }
                // Мой мир
                if ($service == 'mailru') {
                    if($data["pic_128"]){
                        //$avatar = $this->getAvatarFromUrl($data["pic_128"]);
                        //$user->setImage($avatar);
                    }
                }
                // Одноклассники
                if ($service == 'odnoklassniki') {
                    if ($data['pic_4'] != 'http://uld9.mycdn.me/res/stub_128x96.gif') {
                        //$avatar = $this->getAvatarFromUrl($data['pic_1']);
                        //$user->setImage($avatar);
                    }
                }
            }*/

            $this->userManager->updateUser($user);

            $this->session->getFlashBag()->add('success','Аккаунт в соц. сети привязан');
        }
    }

    private function getAvatarFromUrl($url){

        $webPath = realpath(__DIR__."/../../../../../web");

        $tmpfname = tempnam(sys_get_temp_dir(), 'IMG');
        file_put_contents($tmpfname, file_get_contents($url));

        $imageTest = @imagecreatefromstring(file_get_contents($tmpfname));
        if (!is_resource($imageTest)) {
            unlink($tmpfname);
            return NULL;
        }

        $imagine = new Imagine();
        $image = $imagine->open($tmpfname)->thumbnail(new Box(50,50), ImageInterface::THUMBNAIL_OUTBOUND);


        $uniqid = uniqid();
        $ext = 'jpg';

        $result_name = "{$uniqid}.{$ext}";
        while (file_exists($webPath . '/uploads/avatars/' . $result_name)) {
            $uniqid = uniqid();
            $result_name = "{$uniqid}.{$ext}";
        }

        $image->save($webPath . '/uploads/avatars/' . $result_name);

        return '/uploads/avatars/' . $result_name;
    }

    /**
     * {@inheritdoc}
     */
    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        $service = $response->getResourceOwner()->getName();
        $username = $response->getUsername();
        if($username == '' or trim($username) == '' or $username == null){
            return null;
        }
        $user = $this->userManager->findUserBy(array($this->getProperty($response) => $username, 'userType'=>$service));
        $data = $response->getResponse();
        //when the user is registrating
        if (null === $user) {
            $setter = 'set' . ucfirst($service);
            $setter_id = $setter . 'Id';
            $setter_token = $setter . 'AccessToken';
            // create new user here
            $user = $this->userManager->createUser();
            $user->$setter_id($username);
            $user->$setter_token($response->getAccessToken());
            $user->setUserType($service);

            $email = $response->getEmail();

            if($email){
                $testUser = $this->userManager->findUserByEmail($email);

                if($testUser){
                    $email = false;
                }
            }

            // Facebook
            if ($service == 'facebook') {
                $user->setUsername($response->getNickname());
                $user->setName($response->getNickname());
                if(!$email){
                    $email = $username;
                }
                if(strstr($response->getRealName(), ' ')){
                    $a = explode(' ', $response->getNickname());
                    if(count($a) > 1){
                        $user->setI($a[0]);
                        $user->setF($a[1]);
                        $user->setName($a[1]." ".$a[0]);
                    }
                }
                $user->setEmail($email);
                $user->setPlainPassword($username.rand(0,99999));
                if($data["picture"]["data"]["url"]){
                    //$avatar = $this->getAvatarFromUrl($data["picture"]["data"]["url"]);
                    //$user->setImage($avatar);
                }

            }
            // VK
            if ($service == 'vkontakte') {
                $user->setUsername($response->getNickname());
                $user->setName($response->getRealName());
                if(!$email){
                    $email = $username;
                }

                $user->setEmail($email);
                $user->setPlainPassword($username.rand(0,99999));
                if($data["response"][0]["first_name"]){
                    $user->setI($data["response"][0]["first_name"]);
                }
                if($data["response"][0]["last_name"]){
                    $user->setF($data["response"][0]["last_name"]);
                }
                if($data["response"][0]["photo_medium"]){
                    //$avatar = $this->getAvatarFromUrl($data["response"][0]["photo_medium"]);
                    //$user->setImage($avatar);
                }
                //dump($data);exit;
            }
            // Мой мир
            if ($service == 'mailru') {
                $user->setUsername($response->getNickname());
                $user->setName($response->getRealName());
                if(!$email){
                    $email = $username;
                }

                $user->setEmail($email);
                $user->setPlainPassword($username.rand(0,99999));
                if($data["pic_128"]){
                    //$avatar = $this->getAvatarFromUrl($data["pic_128"]);
                    //$user->setImage($avatar);
                }
            }
            // Одноклассники
            if ($service == 'odnoklassniki') {
                $user->setUsername($response->getNickname());
                $user->setName($response->getRealName());
                if(!$email){
                    $email = $username;
                }

                if($data["first_name"]){
                    $user->setI($data["first_name"]);
                }
                if($data["last_name"]){
                    $user->setF($data["last_name"]);
                }
                $user->setEmail($email);
                $user->setPlainPassword($username.rand(0,99999));
                if ($data['pic_4'] != 'http://uld9.mycdn.me/res/stub_128x96.gif') {
                    //$avatar = $this->getAvatarFromUrl($data['pic_1']);
                    //$user->setImage($avatar);
                }
            }
            // Linkedin
            if ($service == 'linkedin') {
                $user->setUsername($response->getNickname());
                $user->setName($response->getRealName());
                if(!$email){
                    $email = $username;
                }

                if(strstr($response->getRealName(), ' ')){
                    $a = explode(' ', $response->getRealName());
                    if(count($a) > 1){
                        $user->setI($a[1]);
                        $user->setF($a[0]);
                    }
                }

                $user->setEmail($email);
                $user->setPlainPassword($username.rand(0,99999));
                /*if ($data['pic_4'] != 'http://uld9.mycdn.me/res/stub_128x96.gif') {
                    //$avatar = $this->getAvatarFromUrl($data['pic_1']);
                    //$user->setImage($avatar);
                }*/
            }
        
            /*if($this->session->get('socType', '') == 'agent'){
                $user->setType('agent');
            }
            elseif($this->session->get('socType', '') == 'customer'){
                $user->setType('customer');
            }
            else{
                $user->setType('social');
            }
            $user->setEmailConfirm(true);*/
            $user->setEnabled(true);
            /*$user->setRoles(array('ROLE_USER'));*/
            $this->userManager->updateUser($user);
            return $user;
        }

        //if user exists - go with the HWIOAuth way
        $user = parent::loadUserByOAuthUserResponse($response);

        $serviceName = $response->getResourceOwner()->getName();
        $setter = 'set' . ucfirst($serviceName) . 'AccessToken';

        //update access token
        $user->$setter($response->getAccessToken());

        return $user;
    }

}

?>