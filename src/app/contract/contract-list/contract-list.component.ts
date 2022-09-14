import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contract.service";
import {Contract} from "../../models/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  constructor(private contractService: ContractService) { }
  config: any;
  contracts: Contract[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.contractService.getAll().subscribe(contracts =>{
      this.contracts = contracts;
      console.log(contracts)
    })
  }
}
