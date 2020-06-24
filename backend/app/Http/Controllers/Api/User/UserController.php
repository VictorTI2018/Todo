<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Core\Validate\Validation;
use Illuminate\Http\Request;
use App\Repository\UserRepository;
use Exception;
use Illuminate\Support\Facades\Hash;
use Prophecy\Exception\Doubler\MethodNotFoundException;

class UserController extends Controller
{

    /** @var \App\Repository\UserRepository */
    protected $userRepository;

    protected $rules = [
        'username' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required'
    ];

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getById(int $id)
    {
        try {
            $user = $this->userRepository->get("id", $id)->first();
            return responseJson($user);
        } catch (MethodNotFoundException $e) {
            return exception($e->getMessage());
        }
    }

    public function create(Request $request)
    {
        try {
            if (Validation::make($request, $this->rules)) {
                return error(Validation::getErrors());
            }

            $data = $request->all();
            $data['password'] = Hash::make($data['password']);
            if ($this->userRepository->insert($data)) {
                return success("Cadastrado com sucesso");
            }
        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ], 500);
        }
    }
}
