<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Task extends Model
{

    protected $fillable = [
        'title', 'user_id', 'description',
        'type', 'done', 'date', 'hour'
    ];

    protected $appends = ['formatted_done', 'formatted_date'];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('user_id', function (Builder $query) {
            $user = Auth::user();
            $query->where('user_id', $user->id);
        });
    }

    public function getFormattedDoneAttribute()
    {
        switch ($this->done) {
            case 'pending':
                return 'Pendente';
                break;
            case 'completed':
                return 'Concluida';
                break;
            case 'cancel':
                return 'Cancelada';
                break;
        }
    }

    public function getFormattedDateAttribute()
    {
        return Carbon::parse($this->date)->format('d/m/Y');
    }

    public function setFormattedDateAttribute($value)
    {
        $this->attributes['date'] = Carbon::createFromFormat('Y-m-d', $value)->toDateString();
    }
}
