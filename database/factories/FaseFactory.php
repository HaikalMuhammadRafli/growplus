<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fase>
 */
class FaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->bs(),
            'description' => $this->faker->paragraph(),
            'benefits' => $this->faker->paragraph(),
            'banner' => asset('images/Sample.png'),
            'progress' => $this->faker->randomElement([20, 40, 60, 80, 100]),
            'status' => $this->faker->randomElement([1, 0]),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
