import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceType} from "../../models/service-type";
import {RentType} from "../../models/rent-type";
import {SFuramaService} from "../../services/s-furama.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../services/service-type.service";
import {RentTypeService} from "../../services/rent-type.service";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {
  serviceType: ServiceType[] = [];
  rentType: RentType[] = [];
  formServiceCreate = new FormGroup({
    // id: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    serviceName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
    serviceArea: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    servicePrice: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    serviceMaxPeople: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    rendType: new FormControl('', [Validators.required]),
    serviceStandardRoom: new FormControl('', [Validators.required]),
    serviceDescription: new FormControl('', [Validators.required]),
    servicePoolArea: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    serviceFloor: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    serviceImage: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
  });
  constructor(private furamaService: SFuramaService,
              private activatedRouter: ActivatedRoute,
              private serviceTypeService: ServiceTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllRentType();
    this.getAllServiceType()
  }
  submit() {
    const service = this.formServiceCreate.value;
    service.serviceType = {
      id: service.serviceType.id,
      serviceTypeName: service.serviceType.serviceTypeName,
    };
    service.rendType = {
      id: service.rendType.id,
      rentTypeName: service.rendType.rentTypeName,
    };
    this.furamaService.saveService(service).subscribe(() => {
      alert('Tạo thành công');
      this.formServiceCreate.reset();
      this.router.navigate(['/service/list']);
    }, e => console.log(e));
  }
  getAllServiceType(){
    this.serviceTypeService.getAll().subscribe(serviceType => {
      this.serviceType = serviceType;
    });
  }
  getAllRentType(){
    this.rentTypeService.getAll().subscribe(rentType => {
      this.rentType = rentType;
    });
  }

}
