<?php


/**
 * Don't delete or modify this file during development process.
 * This file includes some necessary functionality that makes our 
 * template to be more efficient due working with vuejs.
 */

define ("WUE_VERSION", "1.0.0");
define ("WUE_PATH", __DIR__);
define ("WUE_DEV", file_exists(__DIR__ . "/package.json"));


/**
 * NOTE:
 * This project is using composer autoloader and `wue`
 * in namespace refers to `./backend` directory.
 * 
 * NOTE:
 * To manipulating your wordpress functions, create 
 * `function.php` file in `./backend` directory.
 */

require __DIR__ . "/vendor/autoload.php";
require __DIR__ . "/setup/init.php";
require __DIR__ . "/setup/development.php";

$functionsPath = __DIR__ . "/backend/functions.php";
if (file_exists($functionsPath)) {
  require $functionsPath;
}