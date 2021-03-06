import { Employee } from './Employee';
import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeServieceService {

  constructor() {


    }
    getEmployees(): Promise<Employee[]>{
      return Promise.resolve(EMPLOYEES);
  }
  getEmployee(id: number): Promise<Employee>{
    return this.getEmployees().then(emps => emps.find(emp => emp.id === id));
  }
  deleteEmployee(id: number): void{
    this.getEmployees().then(employees =>{
      let emp=employees.find(obj => obj.id=== id);
      let employeeindex=employees.indexOf(emp);
      employees.splice(employeeindex,1);
    })
  }
  addemployees(employee: Employee): void{
    this.getEmployees().then(employees=>{
      let maxIndex = employees.length-1;
      let employeeWithMaxIndex = employees[maxIndex];
      employee.id = employeeWithMaxIndex.id + 1;
      employees.push(employee);
    })
  }
}
