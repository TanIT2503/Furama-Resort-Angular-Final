import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceEditComponent} from "./service-edit/service-edit.component";
import {ServiceCreateComponent} from "./service-create/service-create.component";
import {ServiceDeleteComponent} from "./service-delete/service-delete.component";

const routes: Routes = [
  {
    path: 'list',
    component: ServiceListComponent
  },
  {
    path: 'edit/:id',
    component: ServiceEditComponent
  },
  // {
  //   path: 'delete/:id',
  //   component: ServiceDeleteComponent
  // },
  {
    path: 'create',
    component: ServiceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuramaServiceRoutingModule { }
