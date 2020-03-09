<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin{any}', 'AppController@admin')->where('any', '.*');
Route::any('/{any}', 'AppController@app')->where('any', '^(?!api).*$');