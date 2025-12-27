<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Achievement;

class AchievementController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $achievements = $user ? $user->achievements()->get() : collect();
        return view('achievements.index', compact('achievements'));
    }
}