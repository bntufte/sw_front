import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from './login.service';
import { Showcase } from '../models/showcase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http :  HttpClient, public login : LoginService) { }

  public userId : number = this.login.userId;

  updateProfile(user : User) : Observable<any>{
    return this.http.put<any>("http://localhost:8069/StarWarsTrivia/login/update", user);
  }

  getShowcase(userId) : Observable<Showcase>{
    return this.http.get<Showcase>("http://localhost:8069/StarWarsTrivia/showcase" + userId);
  }

}
