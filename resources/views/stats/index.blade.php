@extends('layouts.home')

@section('title','Statistieken')
@section('content')
<div class="bg-white p-4 rounded shadow">
  <h1 class="text-2xl font-bold mb-4">Statistieken</h1>
  @if($stats)
    <p>Score: {{ $stats->total_score }}</p>
    <p>Wins: {{ $stats->wins }}</p>
    <p>Losses: {{ $stats->losses }}</p>
    <p>Laatst gespeeld: {{ optional($stats->last_played)->diffForHumans() ?? 'Nooit' }}</p>
  @else
    <p>Geen statistieken beschikbaar.</p>
  @endif
</div>
@endsection