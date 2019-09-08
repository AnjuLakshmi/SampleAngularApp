import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent} from './login/login.component';
import { AuthService } from  './auth/auth.service.service';
import { AuthGuardService } from './guards/auth-guard.service';
 
const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'employeeDetails/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(
   routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
