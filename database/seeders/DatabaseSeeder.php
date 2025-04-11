<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            PenggunaSeeder::class,
            PuskesmasSeeder::class,
            ImunisasiSeeder::class,
            OrangTuaSeeder::class,
            FasKesSeeder::class,
            AnakSeeder::class,
            FaseSeeder::class,
            ArtikelSeeder::class,
            TantanganSeeder::class,
            PenggunaTantanganSeeder::class,
            VoucherSeeder::class,
        ]);
    }
}
