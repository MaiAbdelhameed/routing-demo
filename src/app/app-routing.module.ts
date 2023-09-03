import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full'},
  { path: 'department', component: DepartmentListComponent},
  { path: 'department/:id', component: DepartmentDetailsComponent},
  { path: 'employee', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, DepartmentDetailsComponent, EmployeeListComponent, PageNotFoundComponent]