// input-text-area.component.ts
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
})
export class InputTextAreaComponent {
  @Input() id: string = '';
  @Input() formGroup?: FormGroup;
  @Input() formControl?: FormControl;

  get isInvalid(): boolean {
    if (this.formControl) {
      return this.formControl.invalid && this.formControl.touched;
    } else if (this.formGroup) {
      const control = this.formGroup.get('input');
      return control ? control.invalid && control.touched : false;
    }
    return false;
  }

  get errorMessage(): string | null {
    if (this.formControl && this.formControl.errors?.['message']) {
      return this.formControl.errors['message'];
    } else if (this.formGroup) {
      const control = this.formGroup.get('input');
      if (control && control.errors?.['message']) {
        return control.errors['message'];
      }
    }
    return null;
  }

  onBlur() {
    if (this.formControl) {
      this.formControl.markAsTouched();
    } else if (this.formGroup) {
      const control = this.formGroup.get('input');
      control?.markAsTouched();
    }
  }  
}
