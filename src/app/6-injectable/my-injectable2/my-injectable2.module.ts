import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInjectable2Component } from './my-injectable2.component';




@NgModule({
  declarations: [MyInjectable2Component],
  imports: [
    CommonModule
  ],
  providers: [
    
  ],
  exports: [
    MyInjectable2Component
  ]
})
export class MyInjectable2Module { }
