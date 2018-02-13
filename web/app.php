<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Debug\Debug;

/**
 * @var Composer\Autoload\ClassLoader
 */
$loader = require __DIR__.'/../app/autoload.php';

if(file_exists('../.dev')){
    // This check prevents access to debug front controllers that are deployed by accident to production servers.
// Feel free to remove this, extend it, or make something more sophisticated.
    if (isset($_SERVER['HTTP_CLIENT_IP'])
        || isset($_SERVER['HTTP_X_FORWARDED_FOR'])
        || !(in_array(@$_SERVER['REMOTE_ADDR'], array('127.0.0.1', 'fe80::1', '::1')) || php_sapi_name() === 'cli-server')
    ) {
        header('HTTP/1.0 403 Forbidden');
        exit('You are not allowed to access this file. Check '.basename(__FILE__).' for more information.');
    }

    /**
     * @var Composer\Autoload\ClassLoader $loader
     */
    $loader = require __DIR__.'/../app/autoload.php';
    Debug::enable();

    $kernel = new AppKernel('dev', true);
    $kernel->loadClassCache();
    $request = Request::createFromGlobals();
    $response = $kernel->handle($request);
    $response->send();
    $kernel->terminate($request, $response);
}
else{
    include_once __DIR__.'/../app/bootstrap.php.cache';

    $kernel = new AppKernel('prod', false);
    $kernel->loadClassCache();
//$kernel = new AppCache($kernel);

// When using the HttpCache, you need to call the method in your front controller instead of relying on the configuration parameter
//Request::enableHttpMethodParameterOverride();
    $request = Request::createFromGlobals();
    $response = $kernel->handle($request);
    $response->send();
    $kernel->terminate($request, $response);
}


