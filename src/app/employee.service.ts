import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:6788/api/v1/ql_diemkhoan";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, employee);
  }
  getEmployeeById(id?:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployee(id?: number, employee?: Employee): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployee(id?: number): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.baseUrl}/${id}`);
  }
  
  }
