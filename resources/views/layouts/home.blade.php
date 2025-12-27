<!DOCTYPE html>
<html lang="en">
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

            {{-- Account dropdown --}}
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
            <div class="relative">
                <button id="accountButton" class="flex items-center gap-2 focus:outline-none">
                    <i class="bi bi-person-circle text-2xl"></i>
                    <span class="hidden md:inline">Account</span>
                </button>

                                
                                 <div id="dropdownMenu" class="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 z-50 bg-white text-black rounded shadow-lg hidden min-w-[10rem] text-lg">
                    @auth
                        <div class="px-4 py-3 text-gray-600 border-b">
                            <div class="font-medium">{{ auth()->user()->name }}</div>
                            <div class="text-sm text-gray-500 mt-1">
                                Score: {{ auth()->user()->gameStat->total_score ?? '—' }} · Wins: {{ auth()->user()->gameStat->wins ?? 0 }} · Losses: {{ auth()->user()->gameStat->losses ?? 0 }}
                            </div>
                            <div class="text-xs text-gray-400 mt-1">Laatst gespeeld: {{ optional(auth()->user()->gameStat->last_played)->diffForHumans() ?? 'Nooit' }}</div>
                        </div>

                        <div class="py-2">
                            <a href="{{ route('profile') }}" class="block px-4 py-2 hover:bg-gray-100">Profiel</a>
                            <a href="{{ route('stats') }}" class="block px-4 py-2 hover:bg-gray-100">Statistieken</a>
                            <a href="{{ route('achievements') }}" class="block px-4 py-2 hover:bg-gray-100">Achievements</a>
                            <a href="{{ route('leaderboard') }}" class="block px-4 py-2 hover:bg-gray-100">Leaderboard</a>
                        </div>

                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button class="w-full text-left px-4 py-3 hover:bg-gray-100">Uitloggen</button>
                        </form>
                    @else
                        <a href="{{ route('login') }}" class="block px-4 py-3 hover:bg-gray-100">Inloggen</a>
                        <a href="{{ route('register') }}" class="block px-4 py-3 hover:bg-gray-100">Registreren</a>
                    @endauth
                </div>
                 

        </div>
    </nav>

    <main class="max-w-7xl mx-auto p-6">
        @yield('content')
    </main>

    {{-- Dropdown script --}}
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.getElementById('accountButton');
            const menu = document.getElementById('dropdownMenu');

            // Toggle dropdown on click
            button.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!button.contains(event.target) && !menu.contains(event.target)) {
                    menu.classList.add('hidden');
                }
            });
        });
    </script>

</body>
</html>
