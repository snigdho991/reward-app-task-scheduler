<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_data', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('country_of_birth')->nullable();
            $table->string('country_of_residence')->nullable();
            $table->string('region_state')->nullable();
            $table->string('city_of_residence')->nullable();
            $table->string('email')->nullable();
            $table->string('can_we_count_cpp_in_your_country')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_data');
    }
}
