<?php

namespace App\Repository;

use App\Models\Task;

class TasksRepository
{


    public function newQuery()
    {
        return (new Task())
            ->query();
    }

    public function get($key, $value)
    {
        return $this->newQuery()->where("{$key}", $value);
    }

    /**
     * Inserir um novo dado no banco
     *
     * @param array $params
     * @return boolean
     */
    public function insert(array $params): bool
    {
        return (new Task())
            ->fill($params)
            ->save();
    }
}
