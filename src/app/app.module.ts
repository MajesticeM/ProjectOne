import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { LoginComponent } from './login/login.component';
import { RegisterAllComponent } from './register-all/register-all.component';
import { GeneralComponent } from './general/general.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { FormsModule } from '@angular/forms';
import { FarmerdashboardComponent } from './farmerdashboard/farmerdashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },];
@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    LoginComponent,
    RegisterAllComponent,
    GeneralComponent,
    ManufacturerComponent,
    FarmerdashboardComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  exports: [
    RouterModule
  ],
  providers: [

    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
