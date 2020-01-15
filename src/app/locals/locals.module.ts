import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalsRoutingModule } from './locals-routing.module';
import { LocalsListComponent } from './locals-list/locals-list.component';
import { LocalsAddComponent } from './locals-add/locals-add.component';


@NgModule({
  declarations: [LocalsListComponent, LocalsAddComponent],
  imports: [
    CommonModule,
    LocalsRoutingModule
  ]
})
export class LocalsModule { }
