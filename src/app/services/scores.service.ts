import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private ServerUrl: string = 'http://localhost:8080/StarWarsTrivia/';

  constructor(private http: HttpClient) { }

  getScores(): Observable<Score[]> {
    return this.http.get(this.ServerUrl + 'score') as Observable<Score[]>;
  }


}
