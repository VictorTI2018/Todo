<?php

use App\Models\User;

if (!function_exists('exception')) {
    function exception($message)
    {
        return response()->json([
            "exception" => true,
            "message" => $message
        ]);
    }
}

if (!function_exists('responseJson')) {
    function responseJson($value, $status = 200)
    {
        return response()->json($value, $status);
    }
}

if (!function_exists('success')) {
    function success($message)
    {
        return response()->json([
            "success" => true,
            "message" => $message
        ], 200);
    }
}

if (!function_exists('error')) {
    function error($message)
    {
        return response()->json([
            "validate" => true,
            "message" => $message
        ]);
    }
}

if (!function_exists('responseAuth')) {
    function responseAuth(User $user, $token)
    {
        return response()->json([
            "user" => $user,
            "token" => $token,
            "success" => true
        ], 200);
    }
}
