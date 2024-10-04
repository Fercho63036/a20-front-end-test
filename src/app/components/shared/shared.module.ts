import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { ShowResultComponent } from './show-result/show-result.component';

@NgModule({
  declarations: [
    ShowResultComponent,
    InputTextAreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports: [
    ShowResultComponent,
    InputTextAreaComponent
  ]
})
export class SharedModule {}
