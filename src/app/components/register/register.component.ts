import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { User } from 'src/app/models/user';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUsername: string;
  newPassword: string;
  confirmPassword: string;

  constructor(public nav: NavBarService, private register: RegisterService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  registerUser() {
    let newUser = new NewUser(this.newUsername, this.newPassword, this.confirmPassword);
    if (newUser.password === newUser.confirmPassword) {
      let user = new User(this.newUsername, this.newPassword);
      this.register.register(user).subscribe();
    }else{
      console.log("Passwords do not match.")
    }
  }


}
