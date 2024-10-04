import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ChessComponent],
    imports: [
        CommonModule,
        ChessRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [ChessComponent]
})
export class ChessModule { }
