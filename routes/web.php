<?php

use App\Http\Controllers\BlackjackController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


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

// Authentication routes
// Login pagina
Route::get('/login', function () {
    return view('auth.login');
})->name('login');

// Register pagina
Route::get('/register', function () {
    return view('auth.register');
})->name('register');

// Login verwerken
Route::post('/login', function () {
    $credentials = request()->only('email', 'password');

    if (Auth::attempt($credentials)) {
        request()->session()->regenerate();
        return redirect()->route('blackjack.index');
    }

    return back()->withErrors([
        'email' => 'Onjuiste inloggegevens.',
    ])->withInput();
})->name('login.perform');

// Registratie verwerken
Route::post('/register', function () {
    $data = request()->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|confirmed|min:6',
    ]);

    User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
    ]);

    return redirect()->route('login')->with('success', 'Account aangemaakt, je kunt nu inloggen.');
})->name('register.perform');

// Logout
Route::post('/logout', function () {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();

    return redirect()->route('home');
})->name('logout');
Route::get('/leaderboard', [App\Http\Controllers\LeaderboardController::class, 'index'])    ->middleware('auth')
    ->name('leaderboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('profile');
    Route::get('/stats', [App\Http\Controllers\StatController::class, 'index'])->name('stats');
    Route::get('/achievements', [App\Http\Controllers\AchievementController::class, 'index'])->name('achievements');
    // aanvullende game-only features
    Route::get('/blackjack/extra', [App\Http\Controllers\BlackjackController::class, 'extra'])->name('blackjack.extra');
});
