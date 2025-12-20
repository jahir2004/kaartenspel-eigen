<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blackjackgame extends Model
{
    public Deck $deck; 
    public array $playerHand = []; 
    public array $dealerHand = [];

    public function __construct()  
    {   
        $this->deck = new Deck(); 
    }

    public function deal()  
    {   
        $this->playerHand[] = $this->deck->drawCard(); 
        $this->dealerHand[] = $this->deck->drawCard(); 
        $this->playerHand[] = $this->deck->drawCard(); 
        $this->dealerHand[] = $this->deck->drawCard(); 
    }
    
    public function hit()
    {
        $this->playerHand[] = $this->deck->drawCard();
    }

    public function calculateScore($hand): int
    { 
        // Filter out null values
        $hand = array_filter($hand);
        
        $score = array_sum(array_map(fn($card) => $card->value, $hand));

        // Aas als 1 tellen indien nodig
        foreach ($hand as $card) {
            if ($card->rank === 'A' && $score > 21) {
                $score -= 10;
            }
        }
        return $score;
    }
}