import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalsListComponent } from './locals-list/locals-list.component';
import { LocalsAddComponent } from './locals-add/locals-add.component';

const routes: Routes = [
  { path: '', component: LocalsListComponent },
  { path: 'novo', component: LocalsAddComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LocalsRoutingModule { }
