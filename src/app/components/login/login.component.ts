import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  link : string = "";
  //message : string = "";

  constructor(public nav : NavBarService, private login : LoginService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  loginUser(){
    let user : User = new User(this.username, this.password);
    this.login.sendCredentials(user).subscribe();
    this.link = "welcome";
  }

}
