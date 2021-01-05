import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  private ServerUrl: string = 'http://54.67.67.7:8085/StarWarsTrivia/';
  private SwapiUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRewardCharacter(): Observable<Person> {
    let randomNumber: number = this.getRandomInt(82 + 1);
    return this.http.get(this.SwapiUrl + 'people/' + randomNumber) as Observable<Person>;
  }

  insertRewardCharacter(person: Person): Observable<boolean> {
    return this.http.post(this.ServerUrl + 'reward', person) as Observable<boolean>;
  }

}
