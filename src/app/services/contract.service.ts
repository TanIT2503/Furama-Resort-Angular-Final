import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${API_URL}/contracts/${id}`);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${API_URL}/contracts/${id}`, contract);
  }

  deleteContract(id: number): Observable<Contract> {
    return this.http.delete<Contract>(`${API_URL}/contracts/${id}`);
  }
}
