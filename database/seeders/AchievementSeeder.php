<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AchievementSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('achievements')->insert([
            [
                'user_id'    => 1,
                'key'        => 'first_win',
                'unlocked_at'=> $now,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'user_id'    => 1,
                'key'        => 'play_10_games',
                'unlocked_at'=> null,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}