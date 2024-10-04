import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StringValueComponent } from './string-value.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: StringValueComponent }
    ])],
    exports: [RouterModule]
})
export class StringValueRoutingModule { }
