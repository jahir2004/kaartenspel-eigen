<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Blackjack')</title>
    @vite(['resources/css/app.css'])
</head>
<body class="bg-gray-100 text-gray-900">
<nav class="bg-blue-600 text-white p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a href="{{ route('home') }}" class="text-lg font-bold">Blackjack</a>
        <ul class="flex gap-4">
            <li><a href="{{ route('home') }}" class="hover:underline">Home</a></li>
            <li><a href="{{ route('blackjack.index') }}" class="hover:underline">Play the Game</a></li>
        </ul>
    </div>
</nav>

<main class="max-w-7xl mx-auto p-6">
    @yield('content')
</main>
</body>
</html>