<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function () {
    Route::resource('products', 'ProductController');
    // Authentication Routes
    Route::prefix('auth')->group(function () {
        Route::post('login', 'AuthController@login');
        Route::group(['middleware' => ['auth:api']], function () {
            Route::get('refresh', 'AuthController@refresh');
            Route::get('user', 'AuthController@user');
            Route::post('logout', 'AuthController@logout');
        });
    });
});

