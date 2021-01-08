import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';
import { PersonReward } from '../models/person-reward';
import { Useralt } from '../models/useralt';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  // private ServerUrl: string = 'http://54.67.67.7:8085/StarWarsTrivia/';
  private ServerUrl: string = 'http://localhost:8069/StarWarsTrivia/';
  private SwapiUrl: string = 'https://swapi.dev/api/';

  public randomNumber: number;

  constructor(private http: HttpClient, public loginComponent: LoginComponent) { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRewardCharacter(): Observable<Person> {
    this.randomNumber = this.getRandomInt(82 + 1);
    return this.http.get(this.SwapiUrl + 'people/' + this.randomNumber) as Observable<Person>;
  }

  getUserInfo(): Observable<Useralt> {
    return this.http.get(this.ServerUrl + 'login/' + this.loginComponent.login.userId) as Observable<Useralt>;
  }

  insertRewardCharacter(userInfo: User): Observable<any> {
    let personReward: PersonReward = new PersonReward(this.randomNumber, userInfo);
    return this.http.post(this.ServerUrl + 'reward', personReward) as Observable<any>;
  }

}
