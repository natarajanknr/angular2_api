import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'binding',
    component: BindingComponent,
    data: { title: 'Binding Component' }
  },{
    path: 'grid',
    component: GridComponent,
    data: { title: 'Form Component' }
  }];

import { BindingComponent } from './binding/binding.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
