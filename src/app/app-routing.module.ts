import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    { path: 'problem-1', loadChildren: () => import('./components/chess/chess.module').then(m => m.ChessModule) },
    { path: 'problem-2', loadChildren: () => import('./components/string-value/string-value.module').then(m => m.StringValueModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
