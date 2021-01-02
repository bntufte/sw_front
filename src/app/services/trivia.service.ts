import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private ServerUrl: string = 'http://54.67.67.7:8085/StarWarsTrivia/';
  private SwapiUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomQuestion(randomNumber: number): Observable<Question> {
    return this.http.post(this.ServerUrl + 'question', JSON.stringify(randomNumber)) as Observable<Question>;
  }

  getRandomStarWarsData(randomNumber: number): Observable<any> {

    if (randomNumber === 0) {
      let randomPerson:number = this.getRandomInt(82 + 1);
      return this.http.get(this.SwapiUrl + 'people/' + randomPerson);
    } else if (randomNumber === 1) {
      let randomPlanet:number = this.getRandomInt(60 + 1);
      return this.http.get(this.SwapiUrl + 'planets/' + randomPlanet);
    } else if (randomNumber === 2) {
      let randomStarship:number = this.getRandomInt(36 + 1);
      return this.http.get(this.SwapiUrl + 'starships/' + randomStarship);
    } else if(randomNumber === 3) {
      let randomVehicle:number = this.getRandomInt(39 + 1);
      return this.http.get(this.SwapiUrl + 'vehicles/' + randomVehicle);
    } else if (randomNumber === 4) {
      let randomFilm:number = this.getRandomInt(6 + 1);
      return this.http.get(this.SwapiUrl + 'films/' + randomFilm);
    } else if (randomNumber === 5) {
      let randomSpecies:number = this.getRandomInt(37 + 1);
      return this.http.get(this.SwapiUrl + 'species/' + randomSpecies);
    } else {
      return null;
    }

  }

  awardPoints(): string {

    let points: number;
    return 'Correct! You have earned ' + points + 'points';
  }

}
