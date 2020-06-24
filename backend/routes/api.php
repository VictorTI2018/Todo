<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api', 'namespace' => 'Api'], function () use ($router) {

    $router->group(['prefix' => 'auth', 'namespace' => 'Auth'], function () use ($router) {
        $router->post('/', 'LoginController@login');
    });

    $router->group(['prefix' => 'user', 'namespace' => 'User'], function () use ($router) {
        $router->post('/register', 'UserController@create');
    });
    $router->group(["middleware" => 'auth:api'], function () use ($router) {
        $router->group(['prefix' => 'task', 'namespace' => 'Tasks'], function () use ($router) {
            
            $router->get('/{params}', 'FilterController@applyFilter');
            $router->post('/register', 'TaskController@create');
        });
        $router->group(['prefix' => 'user', 'namespace' => 'User'], function () use ($router) {
            $router->get('/{id}', 'UserController@getById');
        });
    });
});
