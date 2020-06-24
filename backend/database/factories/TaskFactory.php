<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Task;
use App\Models\User;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Task::class, function (Faker $faker) {
    $user = User::query()->first();
    return [

        'title' => $faker->text(40),
        'description' => $faker->text(200),
        'user_id' => $faker->randomElement([1, 2, 3, 4, 5]),
        'type' => random_int(1, 7),
        'done' => $faker->randomElement(['pending', 'completed', 'cancel']),
        'date' => $faker->date('Y-m-d'),
        'hour' => $faker->time('H:i:s')
    ];
});
