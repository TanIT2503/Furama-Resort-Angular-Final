import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SFuramaService} from "../../services/s-furama.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.scss']
})
export class ServiceDeleteComponent implements OnInit {
  formServiceDelete: FormGroup;
  id: number;
  constructor(private furamaService: SFuramaService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getService(this.id);
    })
  }
  ngOnInit(): void {
  }
  getService(id: number) {
    return this.furamaService.findById(id).subscribe(service => {
      this.formServiceDelete = new FormGroup({
        name: new FormControl(service.serviceName),
      });
    });
  }
  deleteService(id: number) {
    this.furamaService.deleteService(id).subscribe(() => {
      this.router.navigate(['/service/list']);
    }, e => {
      console.log(e);
    });
  }
}
