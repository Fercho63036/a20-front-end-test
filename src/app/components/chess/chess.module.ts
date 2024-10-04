import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';

@NgModule({
    imports: [
        CommonModule,
        ChessRoutingModule,
    ],
    declarations: [ChessComponent],
    exports: [ChessComponent]
})
export class ChessModule { }
