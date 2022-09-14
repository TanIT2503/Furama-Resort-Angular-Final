import {RentType} from "./rent-type";
import {ServiceType} from "./service-type";

export interface Service {
  id?: number;
  serviceName?: string;
  serviceArea?: number;
  servicePrice?: number;
  serviceMaxPeople?: number;
  rendType?: RentType;
  serviceStandardRoom?: string;
  serviceDescription?: string;
  servicePoolArea?: number;
  serviceFloor?: number;
  serviceImage?: string;
  serviceType?: ServiceType;
}
