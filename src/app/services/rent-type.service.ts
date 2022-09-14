import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../models/rent-type";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(API_URL + '/rent-type');
  }
  findById(id: number): Observable<RentType> {
    return this.http.get<RentType>(`${API_URL}/rent-type/${id}`);
  }
}
