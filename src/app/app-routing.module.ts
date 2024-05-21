import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
 },
 {
  path: 'a',
    loadChildren: () => import('../app/A/a.module').then(x => x.AModule)
},
{
  path: 'b',
  loadChildren: () => import('../app/B/b.module').then(x => x.BModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
