<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\Validate\Validation;
use App\Repository\UserRepository;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /** @var \App\Repository\UserRepository */
    protected $userRepository;

    /** @var \Tymon\JWTAuth\JWTAuth */
    protected $jwt;

    protected $rules = [
        'email' => 'required',
        'password' => 'required'
    ];

    public function __construct(JWTAuth $jwt, UserRepository $userRepository)
    {
        $this->jwt = $jwt;
        $this->userRepository = $userRepository;
    }

    private function isLogged()
    {
        return Auth::user();
    }

    private function authenticate(Request $request)
    {
        if($user = $this->userRepository->get('email', $request->post('email'))->first()) {
            if(Hash::check($user->password, $request->post('password'))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function login(Request $request)
    {
        if (Validation::make($request, $this->rules)) {
            return error(Validation::getErrors());
        }
        $credentials = $request->only(['email', 'password']);
        if (!($token = $this->jwt->attempt($credentials))) {
            return error("E-mail/Senha incorretos");
        }
        $user = $this->isLogged();
        return responseAuth($user, $token);
    }
}
