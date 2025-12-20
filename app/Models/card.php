<?php

namespace App\Models;

class card
{
    public string $suit;

    public string $rank;

    public int $value;

    public function __construct(string $suit, string $rank, int $value)
    {
        $this->suit = $suit;
        $this->rank = $rank;
        $this->value = $value;
    }
}
