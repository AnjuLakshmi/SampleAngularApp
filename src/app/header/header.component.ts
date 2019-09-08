import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  authService:  AuthService,public router: Router) { }

  ngOnInit() {
  }

  //Logout function
  
  logout() {

    this.authService.logout();
}

//Navigate to home page


public goHome() {   
  this.router.navigateByUrl('home');
}
}
