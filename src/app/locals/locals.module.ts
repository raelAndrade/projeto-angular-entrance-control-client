import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalsRoutingModule } from './locals-routing.module';

import { LocalsListComponent } from './locals-list/locals-list.component';
import { LocalsAddComponent } from './locals-add/locals-add.component';

import { MessagesModule } from 'primeng/components/messages/messages';
import { PanelModule } from 'primeng/components/panel/panel';
import { TableModule } from 'primeng/components/table/table';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';

@NgModule({
  declarations: [LocalsListComponent, LocalsAddComponent],
  imports: [
    CommonModule,
    LocalsRoutingModule,
    MessagesModule,
    PanelModule,
    TableModule,
    FieldsetModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule
  ]
})
export class LocalsModule { }
