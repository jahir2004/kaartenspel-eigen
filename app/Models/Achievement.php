<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    protected $fillable = ['user_id', 'key', 'unlocked_at'];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}