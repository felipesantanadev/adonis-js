'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/account/register', 'AccountController.register');
  Route.post('/account/login', 'AccountController.login');
  Route.get('/account', "AccountController.index").middleware(['auth']);

  Route.post('/posts/create', "PostController.create").middleware(['auth']);
}).prefix('api/v1')