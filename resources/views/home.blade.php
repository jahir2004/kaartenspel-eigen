@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <h1 class="text-3xl font-bold mb-4">Welcome to Blackjack</h1>
    <p class="text-lg text-gray-700 mb-6">
        Ready to test your luck and skills? Click the button below to start playing the game!
    </p>
    <a href="{{ route('blackjack.index') }}" class="px-4 py-2 bg-blue-600 text-white rounded">
        Play the Game
    </a>
@endsection