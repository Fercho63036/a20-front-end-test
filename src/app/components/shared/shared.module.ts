import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowResultComponent } from './show-result/show-result.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';

@NgModule({
  declarations: [ShowResultComponent, InputTextAreaComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ShowResultComponent, InputTextAreaComponent],
})
export class SharedModule {}
