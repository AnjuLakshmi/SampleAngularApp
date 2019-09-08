import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from './auth/auth.service.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { StorageService} from './services/storage.service'


// Firebase authorization 

var config = {
  apiKey: "AIzaSyBBvZ4HpZ-HQYg-MmzsksMuOdnJZpLbEbk",
  authDomain: "employee-portal-c4ac7.firebaseapp.com",
  databaseURL: "https://employee-portal-c4ac7.firebaseio.com",
  projectId: "employee-portal-c4ac7",
  storageBucket: "",
  messagingSenderId: "174589477304",
  appId: "1:174589477304:web:591f4ba10183461d"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeDetailsComponent,
    LoginComponent  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  exports: [
    HttpClientModule
],
  providers: [CommonService,AuthService,AuthGuardService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
