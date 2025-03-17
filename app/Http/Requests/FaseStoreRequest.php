<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FaseStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'benefits' => ['required', 'string'],
            'banner' => ['required', 'string'],
            'progress' => ['required', 'string'],
            'status' => ['required', 'boolean'],
        ];
    }
}
