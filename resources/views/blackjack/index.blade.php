
@extends('layouts.game')

@section('title', 'Blackjack')

@section('content')
    <h1 class="text-3xl font-bold mb-4">Blackjack</h1>

    <div class="flex gap-3 mb-6">
        <a href="{{ route('blackjack.start') }}" class="px-4 py-2 bg-blue-600 text-white rounded">Start</a>
        <a href="{{ route('blackjack.hit') }}" class="px-4 py-2 bg-emerald-600 text-white rounded">Hit</a>
        <a href="{{ route('blackjack.result') }}" class="px-4 py-2 bg-amber-600 text-white rounded">Stand / Resultaat</a>
        <a href="{{ route('home') }}" class="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">Home</a>
        <a href="{{ route('leaderboard') }}" class="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">Leaderboard</a>
    </div>

    @php
        $playerScore = isset($game) ? $game->calculateScore($game->playerHand) : 0;
        $dealerScore = isset($game) ? $game->calculateScore($game->dealerHand) : 0;
    @endphp

    @if(isset($game))
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-white rounded shadow">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="font-semibold">Dealer</h2>
                    <span class="text-sm score score--flash">Score: {{ $dealerScore }}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                    @foreach($game->dealerHand as $card)
                        @if($card)
                        <span class="card card--deal" style="animation-delay: {{ $loop->index * 120 }}ms">
                            {{ $card->rank }} {{ $card->suit }}
                        </span>
                        @endif
                    @endforeach
                </div>
            </div>

            <div class="p-4 bg-white rounded shadow">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="font-semibold">Jij</h2>
                    <span class="text-sm score score--flash">Score: {{ $playerScore }}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                    @foreach($game->playerHand as $card)
                        @if($card)
                        <span class="card card--deal" style="animation-delay: {{ $loop->index * 120 }}ms">
                            {{ $card->rank }} {{ $card->suit }}
                        </span>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    @else
        <p class="text-gray-700">Klik op Start om een nieuw spel te beginnen.</p>
         <a href="{{ route('home') }}" class="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">Home</a>
        <a href="{{ route('leaderboard') }}" class="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">Leaderboard</a>
    @endif
@endsection