import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from "@angular/forms";
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeSvc.getEmployees().subscribe(
      res=>{
        this.employeeSvc.employees=res;
      },
      err=>console.log(err)
    );
  }
  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeSvc.putEmployee(form.value).subscribe(
        res=>console.log(res),
        err=>console.log(err)
      );
    } else {
      this.employeeSvc.postEmployee(form.value).subscribe(
        res =>{
          this.getEmployees();
          form.reset();
        },
        err =>console.log(err)
      );
    }
  }
  deleteEmployee(_id:string) {
    if (confirm('Seguro que Elimina ?')){
      this.employeeSvc.deleteEmployee(_id).subscribe(
        res=>{
          this.getEmployees();
        },
        err=>console.log(err)
      );
    }
  }
  putEmployee(employee:Employee) {
    this.employeeSvc.selectedEmployee=employee;
  }
  resetForm(form: NgForm) {
    form.reset();
  }
}


