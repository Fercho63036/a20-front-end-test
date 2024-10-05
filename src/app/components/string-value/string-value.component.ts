import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { isStringValueValid } from 'src/app/utils/data.service';

@Component({
  selector: 'app-string-value',
  templateUrl: './string-value.component.html',
  styleUrls: ['./string-value.component.scss']
})

export class StringValueComponent {
  stringForm: FormGroup;
  output: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.stringForm = this.fb.group({
      input: ['', Validators.required],
    });
  }

  onSubmit() {
    const inputControl = this.stringForm.get('input');
    inputControl?.markAsTouched(); 

    const inputData = inputControl?.value;

    if (isStringValueValid(inputData, this.stringForm)) {
      this.apiService.getMaximunValueFunction({ input: inputData }).subscribe(
        (result) => {
          this.output = result.data;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.output = 'Error fetching result';
        }
      );
    }
  }
}
