<?php

namespace App\Models;

class deck
{
    private array $cards = [];

    public function __construct()
    {
        $suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        $ranks = [
            '2' => 2, '3' => 3, '4' => 4, '5' => 5,
            '6' => 6, '7' => 7, '8' => 8, '9' => 9,
            '10' => 10, 'J' => 10, 'Q' => 10, 'K' => 10, 'A' => 11,
        ];

        foreach ($suits as $suit) {
            foreach ($ranks as $rank => $value) {
                $this->cards[] = new Card($suit, $rank, $value);
            }
        }

        shuffle($this->cards);
    }

    public function drawCard(): ?Card
    {
        return array_pop($this->cards);
    }
}
