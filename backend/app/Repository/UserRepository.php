<?php

namespace App\Repository;

use App\Models\User;

class UserRepository
{
    public function newQuery()
    {
        return (new User())
            ->query();
    }

    public function get($key, $value)
    {
        return $this->newQuery()
            ->where("{$key}", $value);
    }

    public function insert(array $params): bool
    {
        return (new User())
            ->fill($params)
            ->save();
    }
}
