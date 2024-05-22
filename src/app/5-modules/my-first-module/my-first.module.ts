import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from '../my-first-component/my-first.component';
import { MySecondComponent } from '../my-second-component/my-second.component';

const routes: Routes = [
  {
    path: 'first',
    component: MyFirstComponent,
  },
  {
    path: 'second',
    component: MySecondComponent,
  }
];


@NgModule({
  declarations: [
    MyFirstComponent,
    MySecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class MyFirstModule { }
