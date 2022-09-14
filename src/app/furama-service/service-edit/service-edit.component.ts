import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceType} from "../../models/service-type";
import {RentType} from "../../models/rent-type";
import {SFuramaService} from "../../services/s-furama.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ServiceTypeService} from "../../services/service-type.service";
import {RentTypeService} from "../../services/rent-type.service";
import {Service} from "../../models/service";

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {
  formServiceEdit: FormGroup;
  id: number;
  serviceType: ServiceType[] = [];
  rentType: RentType[] = [];
  constructor(private furamaService: SFuramaService,
              private activatedRouter: ActivatedRoute,
              private serviceTypeService: ServiceTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getService(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllServiceType();
    this.getAllRentType();
  }

  private getService(id: number){
    return this.furamaService.findById(id).subscribe(service => {
      this.formServiceEdit = new FormGroup({
        id: new FormControl(service.id, [Validators.required, Validators.pattern('^\\d+$')]),
        serviceName: new FormControl(service.serviceName, [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
        serviceArea: new FormControl(service.serviceArea, [Validators.required, Validators.pattern('^\\d+$')]),
        servicePrice: new FormControl(service.servicePrice, [Validators.required, Validators.pattern('^\\d+$')]),
        serviceMaxPeople: new FormControl(service.serviceMaxPeople, [Validators.required, Validators.pattern('^\\d+$')]),
        rendType: new FormControl(service.rendType, [Validators.required]),
        serviceStandardRoom: new FormControl(service.serviceStandardRoom, [Validators.required]),
        serviceDescription: new FormControl(service.serviceDescription, [Validators.required]),
        servicePoolArea: new FormControl(service.servicePoolArea, [Validators.required, Validators.pattern('^\\d+$')]),
        serviceFloor: new FormControl(service.serviceFloor, [Validators.required, Validators.pattern('^\\d+$')]),
        serviceImage: new FormControl(service.serviceImage, [Validators.required]),
        serviceType: new FormControl(service.serviceType, [Validators.required]),
      });
    });
  }
  updateService(id: number) {
    const service = this.formServiceEdit.value;
    service.serviceType = {
      id: service.serviceType.id,
      serviceTypeName: service.serviceType.serviceTypeName,
    };
    service.rendType = {
      id: service.rendType.id,
      rentTypeName: service.rendType.rentTypeName,
    };
    this.furamaService.updateService(id, service).subscribe(()=>{
      alert('Cập nhật thành công');
    });
  }
  compareWithServiceType(c1: ServiceType, c2: ServiceType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareWithRentType(c1: RentType, c2: RentType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getAllServiceType(){
    this.serviceTypeService.getAll().subscribe(serviceType => {
      this.serviceType = serviceType;
      console.log(serviceType)
    });
  }
  getAllRentType(){
    this.rentTypeService.getAll().subscribe(rentType => {
      this.rentType = rentType;
    });
  }

}
