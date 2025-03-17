<?php

namespace App\Http\Requests;

use App\Models\Puskesmas;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PuskesmasUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => ['required', 'string', 'max:255'],
            'alamat' => ['required', 'string', 'max:255'],
            'kecamatan' => ['required', 'string', 'max:255'],
            'kota' => ['required', 'string', 'max:255'],
            'kontak' => ['required', 'string', 'max:255'],
        ];
    }
}