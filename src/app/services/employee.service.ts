import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  urlApi='http://localhost:4000/api/employees';

  employees: Employee[]=[];

  getEmployees() {
    return this.http.get<Employee[]>(this.urlApi);
  }
}
