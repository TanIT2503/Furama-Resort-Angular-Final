import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuramaServiceRoutingModule } from './furama-service-routing.module';
import { ServiceCreateComponent } from './service-create/service-create.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { ServiceDeleteComponent } from './service-delete/service-delete.component';


@NgModule({
  declarations: [
    ServiceCreateComponent,
    ServiceDeleteComponent
  ],
  exports: [
    ServiceDeleteComponent
  ],
  imports: [
    CommonModule,
    FuramaServiceRoutingModule,
    MdbFormsModule,
    ReactiveFormsModule
  ]
})
export class FuramaServiceModule { }
