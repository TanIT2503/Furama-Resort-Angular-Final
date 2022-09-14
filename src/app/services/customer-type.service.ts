import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../models/customer-type";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customer-type');
  }
  findById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(`${API_URL}/customer-type/${id}`);
  }
}
