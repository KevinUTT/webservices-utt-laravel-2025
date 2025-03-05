<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/practica', function () {
    return view('practica');
});
 
Route::get('/register', [RegisterController::class, 'show']);

//Route::view('/register', 'register', ["nombre" => "Kevin"]);

Route::get('/prueba/{ejemplo}/{otro}', function(string $x, string $y){
    return 'El valor del path param es: ' . $x . ' y el segundo es: ' . $y;
});

/*Route::get('/register', function () {
    //return json_encode(["hi" => "hola"]);
    //return view('registro');
});*/