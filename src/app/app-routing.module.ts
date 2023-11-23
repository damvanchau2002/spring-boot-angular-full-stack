import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path : 'ql_diemkhoan' , component : EmployeeListComponent },
  {path : 'create-ql_diemkhoan' , component : CreateEmployeeComponent },
  {path : 'update-ql_diemkhoan/:id' , component : UpdateEmployeeComponent },
  {path : '' ,redirectTo: 'ql_diemkhoan' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
