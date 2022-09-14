import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {Customer} from "../models/customer";
import {CustomerType} from "../models/customer-type";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: number, customerType: CustomerType): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customerType);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
}
