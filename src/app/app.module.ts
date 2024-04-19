import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyPipe } from './7-pipes/currency.pipe'
import { CapitalPipe } from './7-pipes/capital.pipe';
import { PipesComponent } from './7-pipes/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CurrencyPipe,
    CapitalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
