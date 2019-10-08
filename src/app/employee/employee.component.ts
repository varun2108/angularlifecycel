import { Component, OnInit } from '@angular/core';
import {EmployeeServieceService} from "../servieces/employee-serviece.service";
import {Employee} from "../servieces/Employee"
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServieceService]
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  constructor( private _employeeservice:EmployeeServieceService) { }

  ngOnInit() {
    this._employeeservice.getEmployees().then(data=>{
      console.log(data);
      this.employees=data;
    }).catch(err=> {console.log(err);})
  }
  deleteemployee(id : number): void{
    this._employeeservice.deleteEmployee(id);
  }
}
