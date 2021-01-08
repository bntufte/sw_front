import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http :  HttpClient, public login : LoginService) { }

  updateProfile(user : User) : Observable<any>{
    return this.http.put<any>("http://localhost:8069/StarWarsTrivia/login/update", user);
  }

  getShowcase(this.login.userId)

}
