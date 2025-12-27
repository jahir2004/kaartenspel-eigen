@extends('layouts.home')

@section('content')
<h2 class="text-2xl font-bold mb-4">Registreren</h2>

@if($errors->any())
    <p class="text-red-600">{{ $errors->first() }}</p>
@endif

<form method="POST" action="{{ route('register.perform') }}" class="space-y-4">
    @csrf

    <div>
        <label>Naam</label>
        <input type="text" name="name" class="border p-2 w-full" required>
    </div>

    <div>
        <label>Email</label>
        <input type="email" name="email" class="border p-2 w-full" required>
    </div>

    <div>
        <label>Wachtwoord</label>
        <input type="password" name="password" class="border p-2 w-full" required>
    </div>

    <div>
        <label>Herhaal wachtwoord</label>
        <input type="password" name="password_confirmation" class="border p-2 w-full" required>
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded">Account aanmaken</button>
</form>
@endsection
