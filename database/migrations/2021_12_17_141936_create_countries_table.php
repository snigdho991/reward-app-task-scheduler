<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->string('continent_code')->nullable();
            $table->string('name')->nullable();
            $table->string('iso3')->nullable();
            $table->string('number')->nullable();
            $table->string('full_name')->nullable();
            $table->timestamps();
        });
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('country_id')->nullable();          
            $table->timestamps();
        });
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('state_id')->nullable();        
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
        Schema::drop('countries');
        Schema::drop('states');
        Schema::drop('cities');  
    }
}
