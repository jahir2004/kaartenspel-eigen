@extends('layouts.home')

@section('content')
<h2 class="text-2xl font-bold mb-4">Inloggen</h2>

@if(session('success'))
    <p class="text-green-600">{{ session('success') }}</p>
@endif

@if($errors->any())
    <p class="text-red-600">{{ $errors->first() }}</p>
@endif

<form method="POST" action="{{ route('login.perform') }}" class="space-y-4">
    @csrf

    <div>
        <label>Email</label>
        <input type="email" name="email" class="border p-2 w-full" required>
    </div>

    <div>
        <label>Wachtwoord</label>
        <input type="password" name="password" class="border p-2 w-full" required>
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded">Inloggen</button>
</form>
@endsection
