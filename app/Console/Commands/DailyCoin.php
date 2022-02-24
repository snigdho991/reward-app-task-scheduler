<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class DailyCoin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:coin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        /*$id = $this->argument('id');

        $user = User::findOrFail($id);
        $user->day = 7;
        $user->save();*/

        /*DB::table('users')
            ->where('id', 1)
            ->update(['day' => 10]);*/


        $users = User::all();
        
        foreach ($users as $key => $user) {
            $find_user = User::findOrFail($user->id);
            
            if ($find_user->day >= 6) {
                $find_user->day = 1;
                $find_user->status = 'not taken';
            } else {
                if ($find_user->status == 'taken') {
                    $find_user->day = $find_user->day + 1;
                    $find_user->status = 'not taken';
                } else {
                    $find_user->day = 1;
                    $find_user->status = 'not taken';
                }
            }

            $find_user->save();
        }

        \Log::info("Cron is working fine!");
    }
}
