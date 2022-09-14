import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ServiceType} from "../models/service-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(API_URL + '/service-type');
  }
  findById(id: number): Observable<ServiceType> {
    return this.http.get<ServiceType>(`${API_URL}/service-type/${id}`);
  }
}
