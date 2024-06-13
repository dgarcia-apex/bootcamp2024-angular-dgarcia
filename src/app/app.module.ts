import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInjectable3Component } from './6-injectable/my-injectable3/my-injectable3.component';
import { MyInjectableModule } from './6-injectable/my-injectable/my-injectable.module';
import { MyInjectable2Module } from './6-injectable/my-injectable2/my-injectable2.module';

@NgModule({
  declarations: [
    AppComponent,
    MyInjectable3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyInjectableModule,
    MyInjectable2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
