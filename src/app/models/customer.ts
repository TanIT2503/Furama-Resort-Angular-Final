import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  customerName?: string;
  customerBirthday?: string;
  customerGender?: string;
  customerIdentify?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerType?: CustomerType;
  customerAddress?: string;
}
