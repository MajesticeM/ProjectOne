import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FarmerRegistrationComponent } from "./farmer-registration/farmer-registration.component";
import { RegisterAllComponent } from './register-all/register-all.component';
import { GeneralComponent } from './general/general.component';
import { ManufacturerComponent } from "./manufacturer/manufacturer.component";
import { FarmerdashboardComponent } from './farmerdashboard/farmerdashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'farmer-registration',component:FarmerRegistrationComponent},
  { path:'register-all',component:RegisterAllComponent},
  { path:'general',component:GeneralComponent},
  { path:'manufacturer',component:ManufacturerComponent},
  { path:'farmerdashboard',component:FarmerdashboardComponent},
  { path:'forgot-password',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
