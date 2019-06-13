import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';

@NgModule({
  declarations: [EmployeesComponent, ListEmployeeComponent, AddEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
