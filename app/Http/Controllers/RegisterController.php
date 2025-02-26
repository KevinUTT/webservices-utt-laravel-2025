<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class RegisterController extends Controller
{

    function text(): string 
    {
        return "Holaaaa";
    }
    
    public function show(/*path params*/): View
    {
        /*return view('register', [
            'nombre' => $this->text()
        ]);*/

        return view('register', ["texto" => "Hola PHP"]);
    }

}
