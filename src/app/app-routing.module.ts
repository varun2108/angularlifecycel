import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';


const routes: Routes = [
  {path:'' , redirectTo:"/home", pathMatch: "full"},
{ path: 'home', component:HomeComponent},
{ path: 'about', component:AboutComponent},

{ path: 'support', component:SupportComponent,
  children: [
    { path: 'customersupport', component: CustomersupportComponent },
    { path: 'employeesupport', component: EmployeesupportComponent }
  ]
},
{ path: 'employee', component:EmployeeComponent},
{ path: 'addemployee', component:AddEmployeeComponent},
{ path: 'view-detail/:id', component:EmployeedetailComponent},
{ path: "**", component: PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
