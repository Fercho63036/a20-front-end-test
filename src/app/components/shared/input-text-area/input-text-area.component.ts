import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html'
})
export class InputTextAreaComponent {
  @Input() id!: string;
  @Input() formControl!: FormControl;
}
