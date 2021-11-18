import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.employeeSvc.getEmployees().subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }
}


