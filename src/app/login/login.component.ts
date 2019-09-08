import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName:any ='';
  public password:any ='';

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
  }

//Login Function

  public loginBtnClick() {

   this.authService.signIn(this.userName,this.password);
  
  }

  public cancelBtnClick() {
    this.userName = '';
    this.password = '';
}

}


