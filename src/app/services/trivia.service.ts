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

  getRandomQuestion(): Observable<Question> {

    //return this.http.get(this.ServerUrl + 'question') as Observable<Question>;

    return null;
  }

  // getRandomStarWarsData(): Observable<any> {
  
  //   return this.http.get(this.SwapiUrl + 'number');

  // }

  awardPoints() {

  }

}
