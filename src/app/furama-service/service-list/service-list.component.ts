import { Component, OnInit } from '@angular/core';
import {SFuramaService} from "../../services/s-furama.service";
import {Service} from "../../models/service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  formServiceDelete: FormGroup;
  constructor(private furamaService: SFuramaService) {
  }
  config: any;
  services: Service[] = [];
  serviceDelete: Service = {};
  p: number = 1;

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.furamaService.getAll().subscribe(services => {
      this.services = services;
    });
  }

  getServiceDelete(service: Service){
    this.serviceDelete = service;
  }

  deleteService(id: number) {
    this.furamaService.deleteService(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Xoá thành công');
        this.ngOnInit();
      });
  }
}
