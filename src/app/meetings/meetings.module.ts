import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings-add/meetings-add.component';


@NgModule({
  declarations: [MeetingsListComponent, MeetingsAddComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
