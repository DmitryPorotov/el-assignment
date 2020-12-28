<?php

require 'php/BaseAjax.php';
require 'php/Controllers/PopUp.php';

$routes = require 'php/routes.php';

$uri = $_SERVER['REQUEST_URI'];

$route = strtok($uri, '?');

if (isset($routes[$route])) {
    [$method, $controller] = explode('@', $routes[$route]);
    $cnt = new $controller($_SERVER['QUERY_STRING']);
    $resp = $cnt->$method();
    echo $resp;
}
elseif ('/' === $route) {
    readfile('index.html');
    exit;
}
else {
    http_response_code(404);
    exit;
}
