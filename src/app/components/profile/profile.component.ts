import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NewUser } from 'src/app/models/new-user';
import { Person } from 'src/app/models/person';
import { Showcase } from 'src/app/models/showcase';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  message: string = "";
  showcase: Showcase;
  rewardPerson1: Person = null;
  rewardPerson2: Person = null;
  rewardPerson3: Person = null;
  rewardPerson4: Person = null;

  constructor(private profile: ProfileService, public login: LoginService, public loginComponent : LoginComponent, public cookieService : CookieService) { }

  ngOnInit(): void {
    // this.showShowcase();
  }

  updateUser() {
    let currentUser: string = this.login.username;
    console.log(currentUser);
    let updateUser = new NewUser(currentUser, this.newPassword, this.confirmPassword);
    let user = new User(this.login.username, this.newPassword);
    this.login.sendCredentials(user).subscribe(
      () => {
        if (updateUser.password === updateUser.confirmPassword) {
          this.profile.updateProfile(user).subscribe(
            () => {
              this.message = "Password Changed";
            },
            (err) => {
              this.message = "Password Was Not Changed";
              console.log(err);
            }

          );
        } else {
          this.message = "Your Passwords Did Not Match";
          console.log("Passwords do not match.");
        }
      },
      (err) => {
        this.message = "Incorrect Username or Password";
        console.log(err);
      }
    );

  }

  showShowcase() {   
    let currentUser: number = <number><unknown>this.cookieService.get('userId');
    console.log(currentUser);
    this.profile.getShowcase(currentUser).subscribe(
      (response: Showcase) => {
        this.showcase = response;
        this.profile.getCharacter(this.showcase.people1).subscribe(
          (response: any) => {
            this.rewardPerson1 = response;
          }
        );
        this.profile.getCharacter(this.showcase.people2).subscribe(
          (response: any) => {
            this.rewardPerson2 = response;
          }
        );
        this.profile.getCharacter(this.showcase.people3).subscribe(
          (response: any) => {
            this.rewardPerson3 = response;
          }
        );
        this.profile.getCharacter(this.showcase.people4).subscribe(
          (response: any) => {
            this.rewardPerson4 = response;
          }
        );
      },
      (err) => {
        console.log("Could not find showcase")
        console.log(err);
      }

    );
  }

}

// getRewardCharacter(): Observable<Person> {
//   this.randomNumber = this.getRandomInt(82 + 1);
//   return this.http.get(this.SwapiUrl + 'people/' + this.randomNumber) as Observable<Person>;
// }