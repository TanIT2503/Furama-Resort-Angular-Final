import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer";
import {Service} from "../../models/service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../../services/contract.service";
import {CustomerService} from "../../services/customer.service";
import {SFuramaService} from "../../services/s-furama.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {
  customers: Customer[] =[];
  services: Service[] = [];
  formContractCreate = new FormGroup({
    // id: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    contractStartDate: new FormControl('', [Validators.required]),
    contractEndDate: new FormControl('', [Validators.required]),
    contractTotalCost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    contractDeposit: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    contractCustomer: new FormControl('', [Validators.required]),
    contractService: new FormControl('', [Validators.required]),
  });
  constructor(private contract: ContractService,
              private customer: CustomerService,
              private service: SFuramaService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllService();
  }
  submit() {
    const contract = this.formContractCreate.value;

    this.contract.saveContract(contract).subscribe(() => {
      alert('Tạo thành công');
      this.formContractCreate.reset();
      this.router.navigate(['/contract/list']);
    }, e => console.log(e));
  }

  getAllCustomer(){
    this.customer.getAll().subscribe(customers => {
      this.customers = customers;
      console.log(customers)
    });
  }
  getAllService(){
    this.service.getAll().subscribe(services => {
      this.services = services;
      console.log(services)
    });
  }
}
