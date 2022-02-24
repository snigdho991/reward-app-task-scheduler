<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AppsController;
use App\Http\Controllers\UserInterfaceController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\ComponentsController;
use App\Http\Controllers\ExtensionController;
use App\Http\Controllers\PageLayoutController;
use App\Http\Controllers\FormsController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\MiscellaneousController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ChartsController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\UserDataController;
use App\Http\Controllers\Cms\RewardController;

use App\Models\Country;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $af_countries = Country::where('continent_code', '!=', null)->get();
    $countries = Country::all();
    return view('welcome', [
        'countries' => $countries,
        'af_countries' => $af_countries
    ]);
});

Route::middleware(['guest'])->get('/login', function () {
    return redirect()->route('reward.index');
})->name('login');

Route::middleware(['guest'])->get('/register', function () {
    return redirect()->route('reward.index');
})->name('register');

Route::middleware(['guest'])->get('/reward', [RewardController::class, 'index'])->name('reward.index');

Route::get('/test', function () {
    $af_countries = Country::all();
    $countries = Country::all();
    return view('test', [
        'countries' => $countries,
        'af_countries' => $af_countries
    ]);
});

// group route
Route::group(
    [
        'middleware' => ['is_admin']
    ],
    function () {
        Route::get('/home', [UserDataController::class, 'manage'])->name('home');
        Route::group(
            [
                'prefix' => 'admin',
                'as' => 'admin.'
            ],
            function () {
                Route::group(
                    [
                        'prefix' => 'data',
                        'as' => 'data.'
                    ],
                    function () {
                        Route::get('/manage', [UserDataController::class, 'manage'])->name('manage');
                    }
                );
            }
        );

    }
);


Route::group(
    [
        'prefix' => 'data',
        'as' => 'data.'
    ],
    function () {
        Route::get('/add', [UserDataController::class, 'add'])->name('add');
        Route::post('/save', [UserDataController::class, 'save'])->name('save');
    }
);

Route::get('country-state-city', [CountryController::class, 'index']);
Route::post('get-states-by-country', [CountryController::class, 'getState']);
Route::post('get-cities-by-state', [CountryController::class, 'getCity']);

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/coin-account', [RewardController::class, 'coin_account'])->name('reward.coin.account');
    Route::post('/store-coins', [RewardController::class, 'store_coins'])->name('store.coins');
   
   /*Route::get('/sVgwSHifG/{id}', function ($id) {
        Artisan::command('daily:coin', ['id' => $id]);

        //Artisan::call('emails:sendIfGuideUpdated', ['listing' => $listing]);

        Artisan::command('mail:send {user}', function ($user) {
            $this->info("Sending email to: {$user}!");
        });
        //return $id;
    });*/
});