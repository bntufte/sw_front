import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = null;
  public password : string = null;

  constructor(public nav : NavBarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
