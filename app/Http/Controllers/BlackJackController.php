<?php

namespace App\Http\Controllers;

use App\Models\Blackjackgame;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BlackJackController extends Controller
{
    public function index(Request $request)
    {
        $game = $request->session()->get('game', new Blackjackgame);

        return view('blackjack.index', compact('game'));
    }

    public function start(Request $request)
    {
        $game = new Blackjackgame;
        $game->deal();

        $request->session()->put('game', $game);

        return redirect()->route('blackjack.index');
    }

    public function hit(Request $request)
    {
        $game = $request->session()->get('game');
        $game->hit();

        $request->session()->put('game', $game);

        return redirect()->route('blackjack.index');
    }

    public function stand(Request $request)
    {
        $game = $request->session()->get('game');
        $request->session()->put('game', $game);

        return redirect()->route('blackjack.result');
    }

    public function reset()
    {
        // Logic for resetting the game
    }

    // --- JSON API endpoints for React ---
    public function apiStart(Request $request)
    {
        $game = new Blackjackgame;
        $game->deal();
        $request->session()->put('game', $game);

        return response()->json(['game' => $this->serializeGame($game)]);
    }

    public function apiHit(Request $request)
    {
        $game = $request->session()->get('game');
        if (! $game) {
            $game = new Blackjackgame;
            $game->deal();
        }
        $game->hit();
        $request->session()->put('game', $game);

        return response()->json(['game' => $this->serializeGame($game)]);
    }

    public function apiStand(Request $request)
    {
        $game = $request->session()->get('game');
        if (! $game) {
            $game = new Blackjackgame;
            $game->deal();
        }
        // Dealer draws to 17
        while ($game->calculateScore($game->dealerHand) < 17) {
            $game->dealerHand[] = $game->deck->drawCard();
        }

        // Determine result
        $player = $game->calculateScore($game->playerHand);
        $dealer = $game->calculateScore($game->dealerHand);
        $result = null;
        if ($player > 21) {
            $result = 'player_bust';
        } elseif ($dealer > 21) {
            $result = 'dealer_bust';
        } elseif ($dealer > $player) {
            $result = 'dealer_win';
        } elseif ($dealer < $player) {
            $result = 'player_win';
        } else {
            $result = 'push';
        }

        $payload = $this->serializeGame($game);
    $payload['result'] = $result;
    $request->session()->put('game', $game);

    if (auth()->check()) {
        $map = [
            'player_win'  => 'win',
            'dealer_bust' => 'win',
            'dealer_win'  => 'loss',
            'player_bust' => 'loss',
            'push'        => 'draw',
        ];
        $normalized = $map[$result] ?? 'draw';
        $points = $normalized === 'win' ? $player : 0;
        if ($normalized !== 'draw') {
            $this->finalizeGame(auth()->user(), $normalized, $points);
        }
    }

    return response()->json(['game' => $payload]);
}

    private function serializeGame(Blackjackgame $game): array
    {
        $serialize = function ($card) {
            if (! $card) {
                return null;
            }

            return [
                'rank' => $card->rank,
                'suit' => substr(strtolower($card->suit), 0, 1) === 's' ? 'S'
                    : (substr(strtolower($card->suit), 0, 1) === 'h' ? 'H'
                    : (substr(strtolower($card->suit), 0, 1) === 'd' ? 'D' : 'C')),
                'value' => $card->value,
            ];
        };

        return [
            'player_hand' => array_values(array_filter(array_map($serialize, $game->playerHand))),
            'dealer_hand' => array_values(array_filter(array_map($serialize, $game->dealerHand))),
            'player_score' => $game->calculateScore($game->playerHand),
            'dealer_score' => $game->calculateScore($game->dealerHand),
            'result' => null,
        ];
    }

    protected function finalizeGame(User $user, string $result, int $points = 0)
{
    $stat = $user->gameStat ?? $user->gameStat()->create([]);
    $stat->total_score = ($stat->total_score ?? 0) + $points;
    if ($result === 'win') $stat->wins = ($stat->wins ?? 0) + 1;
    if ($result === 'loss') $stat->losses = ($stat->losses ?? 0) + 1;
    $stat->last_played = now();
    $stat->save();
}
   
   
}  
     