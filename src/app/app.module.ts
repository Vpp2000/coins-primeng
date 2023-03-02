import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
import { CoinsComponent } from './components/coins/coins.component';
import {TableModule} from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
