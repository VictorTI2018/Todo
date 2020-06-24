<?php

namespace App\Http\Controllers\Api\Tasks;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Repository\TasksRepository;
use Illuminate\Database\Eloquent\Builder;

class FilterController extends Controller
{

    /** @var \App\Repository\TasksRepository */
    protected $taskRepository;

    public function __construct(TasksRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    private function filterDate($params, $query)
    {
        $filter = [];
        switch ($params) {
            case 'all':
                $filter = $query->get();
                break;
            case 'today':
                $startToday = Carbon::now()->startOfDay();
                $endToday = $startToday->copy()->endOfDay();
                $filter = $query->where('date', '>=', $startToday)->where('date', '<=', $endToday);
                break;
            case 'week':
                $startWeek = Carbon::now()->startOfWeek();
                $endWeek = $startWeek->copy()->endOfWeek();
                $filter = $query->where('date', '>=', $startWeek)->where('date', '<=', $endWeek);
                break;
            case 'month':
                $startMonth = Carbon::now()->startOfMonth();
                $endMonth = $startMonth->copy()->endOfMonth();
                $filter = $query->where('date', '>=', $startMonth)->where('date', '<=', $endMonth);
                break;
            case 'year':
                $startYear = Carbon::now()->startOfYear();
                $endYear = $startYear->copy()->endOfYear();
                $filter = $query->where('date', '>=', $startYear)->where('date', '<=', $endYear);
                break;
        }
        return $filter;
    }

    public function applyFilter($params)
    {
        $tasks = $this->taskRepository->newQuery()->where(function (Builder $query) use ($params) {
            $this->filterDate($params, $query);
        })->get();

        return responseJson($tasks);
    }
}
