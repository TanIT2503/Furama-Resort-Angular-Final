import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceListComponent} from "./furama-service/service-list/service-list.component";
import {ServiceCreateComponent} from "./furama-service/service-create/service-create.component";

const routes: Routes = [
  { path: '', component: AboutComponent },
  // { path: 'service-list', component: ServiceListComponent },
  // { path: 'service-create', component: ServiceCreateComponent },
  {
    path: 'service',
    loadChildren: () => import('./furama-service/furama-service.module').then(module => module.FuramaServiceModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
