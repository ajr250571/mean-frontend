import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  urlApi='http://localhost:4000/api/employees';

  selectedEmployee: Employee = {
    name:"",
    office:"",
    position:"",
    salary:0,
  };
  employees: Employee[]=[];

  getEmployees() {
    return this.http.get<Employee[]>(this.urlApi);
  }
  postEmployee(employee:Employee) {
    return this.http.post(this.urlApi,employee);
  }
  deleteEmployee(_id:string) {
    return this.http.delete(`${this.urlApi}/${_id}`);
  }
  putEmployee(employee:Employee) {
    return this.http.put(`${this.urlApi}/${employee._id}`, employee);
  }
}
