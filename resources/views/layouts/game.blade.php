<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackjack Game</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-900 text-white">

    {{-- Geen navbar, geen login, geen dropdown --}}
    <main class="max-w-7xl mx-auto p-6">
        @yield('content')
    </main>

</body>
</html>
