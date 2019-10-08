import { EmployeeServieceService } from './../servieces/employee-serviece.service';
import { Employee } from './../servieces/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  employee: Employee=new Employee();
  constructor(private routs:ActivatedRoute, private _empser:EmployeeServieceService,
    private _loc : Location) { }

  ngOnInit() {
    this.routs.params.forEach((parms: Params)=>{
      if(parms['id']!==undefined){
          let id = +parms['id'];
         this._empser.getEmployee(id).then(result => this.employee = result);
          console.log(this.employee);
        }}
    )

}
goBack() : void{
  this._loc.back();
}
}
