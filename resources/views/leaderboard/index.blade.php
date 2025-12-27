@extends('layouts.home')

@section('title', 'Leaderboard')

@section('content')
<div class="bg-white p-4 rounded shadow">
  <h2 class="text-xl font-bold mb-4">Leaderboard</h2>
  <table class="w-full text-left">
    <thead>
      <tr class="border-b">
        <th class="py-2">#</th>
        <th class="py-2">Speler</th>
        <th class="py-2">Wins</th>
        <th class="py-2">Score</th>
      </tr>
    </thead>
    <tbody>
      @foreach($leaders as $i => $stat)
        <tr class="border-b">
          <td class="py-2">{{ $i + 1 }}</td>
          <td class="py-2">{{ $stat->user->name }}</td>
          <td class="py-2">{{ $stat->wins }}</td>
          <td class="py-2">{{ $stat->total_score }}</td>
        </tr>
      @endforeach
    </tbody>
  </table>
</div>
@endsection