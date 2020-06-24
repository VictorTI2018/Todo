<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\User::class, 4)->create();
        (new User())
            ->fill([
                'username' => 'Victor',
                'email' => 'admin@admin.com',
                'password' => Hash::make('123456')
            ])->save();
    }
}
