import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Componentes PrimeNG */
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    CardModule,
    MenuModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
