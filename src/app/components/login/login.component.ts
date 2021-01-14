import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { LoginService } from 'src/app/services/login.service';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {  
  userNumber : number;
  userId : number;
  username: string;
  password: string;
  //link: string = "";
  message: string = "";


  constructor(public nav: NavBarService, public login: LoginService, private router : Router, public cookieService : CookieService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  loginUser() {
    let user: User = new User(this.username, this.password);
    this.login.sendCredentials(user).subscribe(
      (userInfo: UserInfo) => {
        //logic done if logged in successful with a 200 status code
        if (userInfo != null) {
          this.login.userId = userInfo.userId;
          this.userId = userInfo.userId;
          this.cookieService.set( 'userId', <string><unknown>userInfo.userId);
          this.cookieService.set( 'userName', userInfo.username);
          this.cookieService.set( 'userPass', <string><unknown>userInfo.userId);              
          this.login.username = userInfo.username;
          this.cookieService.set( 'username', userInfo.username);
          console.log(userInfo);
          //this.message = "Login Was Successful";
          //this.link = "home";
          this.router.navigateByUrl("/home");
        } else {
          this.message = "Incorrect Username or Password";
          console.log("null observable");
        }
      },
      (err) => {
        //status code 500 or 400
        console.log("error status code during login");
        console.log(err);
        this.message = "Incorrect Username or Password";      }
    );

  }

}
