import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Router } from  "@angular/router";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:User;
token: string;


  constructor(
    public  afAuth:  AngularFireAuth, 
    public  router:  Router
  ) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  // Login Function

  signIn(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            this.token = token;
            this.router.navigateByUrl("home");
          });
      })
      .catch(e => {
        alert("Error!"  +  e.message);
      });
  }

  getToken(){

    firebase.auth().currentUser.getIdToken()
      .then(token=>this.token = token);
      return this.token = null ;
    
  }


//Logout Function

    async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.token =null;
      this.router.navigateByUrl('login');
  }

    get isLoggedIn(): boolean {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user  !==  null;
      
  } 
  isAuthenticated(){
    return this.token != null;
  }
  
}
