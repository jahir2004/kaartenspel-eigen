<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameStat;

class LeaderboardController extends Controller
{
    public function index()
    {
        $leaders = GameStat::with('user')->orderByDesc('wins')->limit(20)->get();
        return view('leaderboard.index', compact('leaders'));
    }
}
