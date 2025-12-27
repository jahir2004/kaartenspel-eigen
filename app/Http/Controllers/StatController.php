<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $stats = $user ? $user->gameStat : null;
        return view('stats.index', compact('stats'));
    }
}
