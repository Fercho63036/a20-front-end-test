import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringValueRoutingModule } from './string-value-routing.module';
import { StringValueComponent } from './string-value.component';

@NgModule({
    imports: [
        CommonModule,
        StringValueRoutingModule
    ],
    declarations: [StringValueComponent]
})
export class StringValueModule { }
