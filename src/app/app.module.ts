import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomDirectiveComponent } from './3-custom-directive/custom-directive/custom-directive.component';
import { CustomDirective } from './3-custom-directive/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    CustomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
