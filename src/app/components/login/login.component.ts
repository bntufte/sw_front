import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { LoginService } from 'src/app/services/login.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  //link: string = "";
  message: string = "";


  constructor(public nav: NavBarService, private login: LoginService, private router : Router) { }

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
          this.login.username = userInfo.username;
          //this.message = "Login Was Successful";
          //this.link = "home";
          this.router.navigateByUrl("/home");
        } else {
          this.message = "Incorrect Username or Password";
          console.log("null observable");
        }
      },
      () => {
        //status code 500 or 400
        console.log("error status code during login")
        this.message = "Incorrect Username or Password";      }
    );

  }

}
