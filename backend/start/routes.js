'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('companies', 'CompanyController.index')
Route.post('companies', 'CompanyController.store')
Route.get('companies/:id', 'CompanyController.show')
Route.put('companies/:id', 'CompanyController.update')
Route.delete('companies/:id', 'CompanyController.destroy')

Route.get('workers', 'WorkerController.index')
Route.post('workers', 'WorkerController.store')
Route.get('workers/:id', 'WorkerController.show')
Route.put('workers/:id', 'WorkerController.update')
Route.delete('workers/:id', 'WorkerController.destroy')

Route.get('activities', 'ActivityController.index')
Route.post('activities', 'ActivityController.store')
Route.get('activities/:id', 'ActivityController.show')
Route.put('activities/:id', 'ActivityController.update')
Route.delete('activities/:id', 'ActivityController.destroy')

Route.get('equipments', 'EquipmentController.index')
Route.post('equipments', 'EquipmentController.store')
Route.get('equipments/:id', 'EquipmentController.show')
Route.put('equipments/:id', 'EquipmentController.update')
Route.delete('equipments/:id', 'EquipmentController.destroy')

Route.get('roles', 'RoleController.index')
Route.post('roles', 'RoleController.store')
Route.get('roles/:id', 'RoleController.show')
Route.put('roles/:id', 'RoleController.update')
Route.delete('roles/:id', 'RoleController.destroy')

Route.get('activities-workers', 'ActivityWorkerController.index')
Route.post('activities-workers', 'ActivityWorkerController.store')
Route.get('activities-workers/:id', 'ActivityWorkerController.show')
Route.put('activities-workers/:id', 'ActivityWorkerController.update')
Route.delete('activities-workers/:id', 'ActivityWorkerController.destroy')
