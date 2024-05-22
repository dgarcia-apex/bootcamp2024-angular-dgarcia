import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstModule } from './5-modules/my-first-module/my-first.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
