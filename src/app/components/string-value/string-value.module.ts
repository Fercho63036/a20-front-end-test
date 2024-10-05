import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringValueRoutingModule } from './string-value-routing.module';
import { StringValueComponent } from './string-value.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [StringValueComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StringValueRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [StringValueComponent], 
})
export class StringValueModule { }
