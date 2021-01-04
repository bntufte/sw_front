import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :  HttpClient) { }

  sendCredentials(user : User) : Observable<User>{
    let body : User = user;
    return this.http.post<User>("http://54.67.67.7:8085/StarWarsTrivia/", body);
  }

}