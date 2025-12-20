
<?php

use App\Http\Controllers\BlackjackController;
use Illuminate\Support\Facades\Route;

// ...existing code...
Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/blackjack', function () {
    return view('blackjack.game');
})->name('blackjack.index');
Route::get('/blackjack/start', [BlackjackController::class, 'start'])->name('blackjack.start');
Route::get('/blackjack/hit', [BlackjackController::class, 'hit'])->name('blackjack.hit');

Route::get('/blackjack/result', function (\Illuminate\Http\Request $request) {
    $game = $request->session()->get('game');

    return view('blackjack.result', compact('game'));
})->name('blackjack.result');

// JSON API endpoints used by React (session-aware)
Route::post('/blackjack/api/start', [BlackjackController::class, 'apiStart'])->name('blackjack.api.start');
Route::post('/blackjack/api/hit', [BlackjackController::class, 'apiHit'])->name('blackjack.api.hit');
Route::post('/blackjack/api/stand', [BlackjackController::class, 'apiStand'])->name('blackjack.api.stand');
// ...existing code...
