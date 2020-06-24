<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Authenticate
{


    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        try {
            $user = Auth::payload();
        } catch (TokenExpiredException $e) {
            return response()->json(["token_expirado" => $e->getMessage()], 500);
        } catch (TokenInvalidException $e) {
            return response()->json(["token_invalido" => $e->getMessage()], 500);
        } catch (JWTException $e) {
            return response()->json(["token_ausente" => $e->getMessage()], 500);
        }
        return $next($request);
    }
}
