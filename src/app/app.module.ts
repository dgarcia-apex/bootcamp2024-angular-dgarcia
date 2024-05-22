import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './7-pipes/capitalize.pipe';
import { PipesComponent } from './7-pipes/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
