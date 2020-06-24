<?php

namespace App\Core\Validate;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Validation
{

    private static $errors = null;

    public static function make(Request $request, array $rules)
    {
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            self::$errors = $validator->errors();
        }

        return self::$errors;
    }

    public static function getErrors()
    {
        return self::$errors;
    }
}
