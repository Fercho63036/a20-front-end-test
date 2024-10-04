import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService  } from 'src/app/services/api.service';
import { separateChessData } from 'src/app/utils/data-utils';
import { isChessDataValid } from 'src/app/utils/validations-utils';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
})
export class ChessComponent implements OnInit {
  chessForm: FormGroup;

  submitted: boolean = false;

  output: string = '';

  constructor(
    private fb: FormBuilder,
    private services: ApiService
  ) {
    this.chessForm = this.fb.group({
      input: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  async handleButtonClick(): Promise<void> {
    this.submitted = true;
    this.output = '';
    const inputData = this.chessForm.value.input;
    const separatedInput = separateChessData(inputData);

    if (isChessDataValid(separatedInput, this.setError, this.clearError)) {
      try {
        const result = await this.services.getQueenAttackableSquares(separatedInput);
        this.output = result.data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  setError(error: any): void {
    this.chessForm.controls['input'].setErrors({ customError: error });
  }

  clearError(): void {
    this.chessForm.controls['input'].setErrors(null);
  }
}
