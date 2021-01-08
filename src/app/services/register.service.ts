import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { 
  }

  register(user :  User) : Observable<any>{
    let body : User = user;
    return this.http.post<any>('http://localhost:8080/StarWarsTrivia/register', body);
  }
}
