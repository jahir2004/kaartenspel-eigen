@extends('layouts.home')

@section('title','Achievements')
@section('content')
<div class="bg-white p-4 rounded shadow">
  <h1 class="text-2xl font-bold mb-4">Achievements</h1>
  @if($achievements->isNotEmpty())
    <ul>
      @foreach($achievements as $ach)
        <li>{{ $ach->key }} — {{ optional($ach->unlocked_at)->diffForHumans() ?? 'Locked' }}</li>
      @endforeach
    </ul>
  @else
    <p>Geen achievements gevonden.</p>
  @endif
</div>
@endsection