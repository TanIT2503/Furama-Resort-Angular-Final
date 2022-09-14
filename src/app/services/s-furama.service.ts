import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Service} from "../models/service";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SFuramaService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(API_URL + '/services');
  }

  saveService(service): Observable<Service> {
    return this.http.post<Service>(API_URL + '/services', service);
  }

  findById(id: number): Observable<Service> {
    return this.http.get<Service>(`${API_URL}/services/${id}`);
  }

  updateService(id: number, service: Service): Observable<Service> {
    return this.http.put<Service>(`${API_URL}/services/${id}`, service);
  }

  deleteService(id: number): Observable<Service> {
    return this.http.delete<Service>(`${API_URL}/services/${id}`);
  }
}
