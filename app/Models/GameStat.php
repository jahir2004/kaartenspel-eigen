<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameStat extends Model
{
    protected $fillable = ['user_id','total_score','wins','losses','last_played'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
