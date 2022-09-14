import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
searchText;
  constructor(private customerService: CustomerService) { }
  config: any;
  customers: Customer[] = [];
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
}
