import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer";
import {Service} from "../../models/service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
searchText;
  customers: Customer[] = [];
  customerDelete: Customer = {};
  constructor(private customerService: CustomerService) { }
  config: any;
  p: number = 1;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      console.log(customers)
    })
  }

  getCustomerDelete(customer: Customer){
    this.customerDelete = customer;
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
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
