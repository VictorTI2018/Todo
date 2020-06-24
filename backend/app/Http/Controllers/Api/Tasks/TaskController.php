<?php

namespace App\Http\Controllers\Api\Tasks;

use App\Core\Validate\Validation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\TasksRepository;
use Exception;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class TaskController extends Controller
{

    /** @var \App\Repository\TasksRepository */
    protected $taskRepository;

    protected $rules = [
        'title' => 'required',
        'description' => 'required',
        'date' => 'required',
        'hour' => 'required',
        'user_id' => 'required'
    ];

    public function __construct(TasksRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }



    public function create(Request $request)
    {
        try {
            if (Validation::make($request, $this->rules)) {
                return error(Validation::getErrors());
            }
            $data = $request->all();
            $current = Carbon::now()->format('Y-m-d');
            if ($data['date'] >= $current) {
                $taskExists = $this->taskRepository->get("date", $data['date'])
                    ->where('hour', $data['hour'])->first();
                if (!$taskExists) {
                    $this->taskRepository->insert($data);
                    return success("Tarefa criada com sucesso");
                } else {
                    return error("Já existe uma tarefa cadastrada nesta data e horario");
                }
            } else {
                return error("A data não pode ser menor que a data atual!");
            }
        } catch (Exception $e) {
            return response()->json(["message" => $e->getMessage()], 500);
        }
    }
}
