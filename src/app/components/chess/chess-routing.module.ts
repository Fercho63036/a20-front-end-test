import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChessComponent } from './chess.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ChessComponent }
    ])],
    exports: [RouterModule]
})
export class ChessRoutingModule { }
