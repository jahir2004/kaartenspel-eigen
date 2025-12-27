@extends('layouts.game')

@section('title', 'Resultaat')

@section('content')
    <h1 class="text-3xl font-bold mb-4">Resultaat</h1>

    @php
        $playerScore = isset($game) ? $game->calculateScore($game->playerHand) : 0;
        $dealerScore = isset($game) ? $game->calculateScore($game->dealerHand) : 0;

        $message = '';
        if (!isset($game)) {
            $message = 'Geen actief spel.';
        } elseif ($playerScore > 21) {
            $message = 'Jij hebt meer dan 21. Dealer wint.';
        } elseif ($dealerScore > 21) {
            $message = 'Dealer gaat over 21. Jij wint!';
        } elseif ($playerScore > $dealerScore) {
            $message = 'Jij wint!';
        } elseif ($playerScore < $dealerScore) {
            $message = 'Dealer wint.';
        } else {
            $message = 'Gelijkspel (push).';
        }
    @endphp

    <div class="mb-4 p-3 bg-white rounded shadow">
        <p class="font-semibold">{{ $message }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="p-4 bg-white rounded shadow">
            <div class="flex justify-between items-center mb-2">
                <h2 class="font-semibold">Dealer</h2>
                <span class="text-sm score score--flash">Score: {{ $dealerScore }}</span>
            </div>
            <div class="flex flex-wrap gap-2">
                @if(isset($game))
                    @foreach($game->dealerHand as $card)
                        @if($card)
                        <span class="card card--deal" style="animation-delay: {{ $loop->index * 120 }}ms">
                            {{ $card->rank }} {{ $card->suit }}
                        </span>
                        @endif
                    @endforeach
                @endif
            </div>
        </div>

        <div class="p-4 bg-white rounded shadow">
            <div class="flex justify-between items-center mb-2">
                <h2 class="font-semibold">Jij</h2>
                <span class="text-sm score score--flash">Score: {{ $playerScore }}</span>
            </div>
            <div class="flex flex-wrap gap-2">
                @if(isset($game))
                    @foreach($game->playerHand as $card)
                        @if($card)
                        <span class="card card--deal" style="animation-delay: {{ $loop->index * 120 }}ms">
                            {{ $card->rank }} {{ $card->suit }}
                        </span>
                        @endif
                    @endforeach
                @endif
            </div>
        </div>
    </div>

    <div class="flex gap-3">
        <a href="{{ route('blackjack.start') }}" class="px-4 py-2 bg-blue-600 text-white rounded">Nieuw spel</a>
        <a href="{{ route('blackjack.index') }}" class="px-4 py-2 bg-gray-700 text-white rounded">Terug</a>
    </div>
@endsection