import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../models/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../services/customer-type.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  customerType: CustomerType[]
  formCustomerCreate = new FormGroup({
    // id: new FormControl('',[Validators.required, Validators.pattern('^\\d+$')]),
    customerBirthday: new FormControl('', [Validators.required]),
    customerGender: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
    customerIdentify: new FormControl('', [Validators.required, Validators.pattern('/^[0-9]{10,12}$/')]),
    customerEmail: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]),

  });
  constructor(private customer: CustomerService,
              private activatedRouter: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomerType();
  }
  submit() {
    const customer = this.formCustomerCreate.value;
    customer.customerType = {
      id: customer.customerType.id,
      customerTypeName: customer.customerType.customerTypeName,
    };
    this.customer.saveCustomer(customer).subscribe(() => {
      alert('Tạo thành công');
      this.formCustomerCreate.reset();
      this.router.navigate(['/customer/list']);
    }, e => console.log(e));
  }
  getAllCustomerType(){
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerType = customerType;
      console.log(customerType)
    });
  }
}
