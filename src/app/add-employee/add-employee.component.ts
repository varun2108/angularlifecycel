import { Employee } from './../servieces/Employee';
import { EmployeeServieceService } from './../servieces/employee-serviece.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  emp:Employee = new Employee();
  constructor(private _emplyeeser:EmployeeServieceService,
    private _router: Router) { }

  ngOnInit() {
  }
  addEmployee(){
    this._emplyeeser.addemployees(this.emp);
    this._router.navigate(['/employee'])
  }
}
