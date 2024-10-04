import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { isStringValueValid } from '../../utils/validations-utils';

@Component({
  selector: 'app-string-value',
  templateUrl: './string-value.component.html'
})
export class StringValueComponent {
  stringForm: FormGroup;
  output: string = '';
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.stringForm = this.fb.group({
      input: ['', Validators.required]
    });
  }

  async handleButtonClick(): Promise<void> {
    this.submitted = true;

    if (this.stringForm.invalid) {
      return;
    }

    const inputData = this.stringForm.value;
    if (isStringValueValid(inputData.input, this.setError.bind(this), this.clearError.bind(this))) {
      const result = await this.apiService.getMaximunValueFunction(inputData);
      this.output = result.data;
    }
  }

  setError(message: string): void {
    this.stringForm.controls['input'].setErrors({ customError: message });
  }

  clearError(): void {
    this.stringForm.controls['input'].setErrors(null);
  }

    // Método para obtener el FormControl casteado desde AbstractControl
    get inputControl(): FormControl {
      return this.stringForm.get('input') as FormControl;
    }
}
