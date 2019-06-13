import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from "src/app/auth/auth/auth.component";
import { EmployeesComponent } from "src/app/employees/employees/employees.component";
import { AuthGuardService } from "src/app/auth/services/auth-guard/auth-guard.service";
import { LoginComponent } from "src/app/auth/auth/login/login.component";
import { SignupComponent } from "src/app/auth/auth/signup/signup.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
