import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../models/customer-type";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../../services/customer-type.service";
import {RentType} from "../../models/rent-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  formCustomerEdit: FormGroup;
  id: number;
  customerType: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private activatedRouter: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    })
  }

  private getCustomer(id: number){
    return this.customerService.findById(id).subscribe(customer => {
      this.formCustomerEdit = new FormGroup({
        // id: new FormControl(customer.id,[Validators.required, Validators.pattern('^\\d+$')]),
        customerBirthday: new FormControl(customer.customerName, [Validators.required]),
        customerGender: new FormControl(customer.customerGender, [Validators.required]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
        customerIdentify: new FormControl(customer.customerIdentify, [Validators.required, Validators.pattern('/^[0-9]{10,12}$/')]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]),
      });
    });
  }
  ngOnInit(): void {
    this.getAllCustomerType();
  }
  updateCustomer(id: number) {
    const customer = this.formCustomerEdit.value;
    customer.customerType = {
      id: customer.customerType.id,
      customerTypeName: customer.customerType.customerTypeName,
    };

    this.customerService.updateCustomer(id, customer).subscribe(()=>{
      alert('Cập nhật thành công');
    });
  }
  compareWithCustomerType(c1: CustomerType, c2: CustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getAllCustomerType(){
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerType = customerType;
      console.log(customerType)
    });
  }
}
