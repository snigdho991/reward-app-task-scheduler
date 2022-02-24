<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Country;
use App\Models\State;
use App\Models\UserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserDataController extends Controller
{
    public function add(){
        $countries = Country::get(["name","id"]);
        return view('data.add',compact('countries'));
    }

    public function save(Request $request){
        // validate data
        // $validator = Validator::make($request->all(),[
            
        // ])
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'country_of_birth' => 'required',
            'country_of_residence' => 'required',
            'region_state' => 'required',
            'city_of_residence' => 'sometimes',
            'email' => 'required',
            'can_we_count_cpp_in_your_country' => 'required',
        ]);
        try {
            //  save data
            $userData = new UserData();
            $userData->first_name = $request->first_name;
            $userData->last_name = $request->last_name;
            $userData->country_of_birth = Country::where('id', $request->country_of_birth)->first()->name;
            $userData->country_of_residence =  Country::where('id', $request->country_of_residence)->first()->name;
            $userData->region_state = State::where('id', $request->region_state)->first()->name;
            $userData->city_of_residence =  $request->city_of_residence;
            $userData->email = $request->email;
            $userData->can_we_count_cpp_in_your_country = $request->can_we_count_cpp_in_your_country;
            $userData->save();
            return redirect()->back()->with('success','Data saved successfully');
        } catch (\Throwable $th) {
            throw $th;
            return redirect()->back()->with('error','Something went wrong');
        }
    }

    public function manage(){
        $userData = UserData::all();
        return view('home',compact('userData'));
    }
}
