<?php
ini_set("arg_separator.output", "&amp;");
ini_set("default_charset", "utf-8");
// Set content security policy header. This instructs the browser to block various unsafe behaviours.
header("Content-Security-Policy-Report-Only:default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval';child-src 'self';font-src 'self';style-src 'self' ");
// Start output buffering with gzip compression and start the session
ob_start("ob_gzhandler");
session_start();
// get full path
define("MY_ROOT", realpath(dirname(__FILE__)));
// release date
define("MY_PUBDATE", "1426201200");
define("MY_DATEFORMAT", "d.m.Y");

// uncomment next line for debugging
error_reporting(E_ALL || E_NOTICE);
ini_set("display_errors", 1);

// include composer dependencies
require(MY_ROOT . "/vendor/autoload.php");
// include global functions
require(MY_ROOT . "/include/globalFunctions.php");
// require html purifier
require(MY_ROOT . "/include/HTMLPurifier.standalone.php");
//initialise HTMLPurifier XSS protection filter


// create slim dependency container
$container = new \Slim\Container;
// create slim object
$router = new \Slim\App($container);

$router->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$router->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$dbHost = "127.0.0.1";
$dbName= "cherrycake";
$dbUser = "root";
$dbPass = "";
//$connection = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPass);
//$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
//$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
