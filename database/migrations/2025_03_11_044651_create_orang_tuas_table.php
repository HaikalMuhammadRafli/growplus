<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orang_tuas', function (Blueprint $table) {
            $table->string('orangtua_id')->primary();
            $table->string('pengguna_id');
            $table->string('nik');
            $table->string('no_jkn');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('golongan_darah');
            $table->text('alamat');
            $table->string('pekerjaan');
            $table->integer('penghasilan');
            $table->string('sumber_penghasilan');
            $table->string('jumlah_tanggungan');
            $table->enum('status_rumah', ['sendiri', 'sewa', 'kontrak']);
            $table->integer('tanggungan_listrik');
            $table->integer('tanggungan_air');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orang_tuas');
    }
};
