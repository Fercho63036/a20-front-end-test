import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { isChessDataValid, separateChessData } from 'src/app/utils/data.service';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {
  chessForm: FormGroup;
  output: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.chessForm = this.fb.group({
      input: ['', Validators.required],
    });
  }

  onSubmit() {
    const inputControl = this.chessForm.get('input');
    inputControl?.markAsTouched();

    const inputData = inputControl?.value;
    const separatedInput = separateChessData(inputData);

    if (isChessDataValid(separatedInput, this.chessForm)) {
      this.apiService.getQueenAttackableSquares(separatedInput).subscribe(
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
