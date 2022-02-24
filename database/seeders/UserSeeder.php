<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create(); 

        // create user
        $user = User::create([
            'name' => $faker->name,
            'email' => 'user@user.com',
            'password' => Hash::make('1234567890'),
        ]);
        $user->assignRole(User::USER_ROLE);

        // create admin
        $admin = User::create([
            'name' => $faker->name,
            'email' => 'admin@admin.com',
            'password' => Hash::make('1234567890'),
        ]);
        $admin->assignRole(User::ADMIN_ROLE);
    }
}
