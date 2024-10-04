import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringValueRoutingModule } from './string-value-routing.module';
import { StringValueComponent } from './string-value.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StringValueRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [StringValueComponent]
})
export class StringValueModule { }
