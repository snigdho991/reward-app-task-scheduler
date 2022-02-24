<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use App\Models\User;
use Session;

class RewardController extends Controller
{
    public function index()
    {
    	return view('reward.index');
    }

    public function coin_account()
    {
    	$auth = Auth::user();
    	return view('reward.coin-account', compact('auth'));
    }

    public function store_coins(Request $request)
    {
    	$user = User::findOrFail($request->user_id);
    	$user->coins = $user->coins + $request->coins;
    	$user->status = 'taken';
    	$user->save();

    	// Session::flash('success', $request->coins.' Gold Coins Collected Successfully!');
    	return redirect()->back();
    }
}
