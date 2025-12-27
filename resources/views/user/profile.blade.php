@extends('layouts.home')

@section('title','Profiel')
@section('content')
<div class="bg-white p-4 rounded shadow">
  <h1 class="text-2xl font-bold mb-4">Profiel</h1>
  @if($user)
    <p>Naam: {{ $user->name }}</p>
    <p>Email: {{ $user->email }}</p>
  @else
    <p>Niet ingelogd.</p>
  @endif
</div>
@endsection