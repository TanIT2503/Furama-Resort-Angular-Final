import {Customer} from "./customer";
import {Service} from "./service";

export interface Contract {
  id: string;
  contractStartDate: string;
  contractEndDate: string;
  contractTotalCost: number;
  contractDeposit: number;
  contractCustomer: Customer;
  contractService: Service;
}
