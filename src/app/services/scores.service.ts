import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../models/Score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http : HttpClient) { }

  getAllScores(): Observable<Score[]> {
    
    return this.http.get<Score[]>('http://54.67.67.7:8085/StarWarsTrivia/scoreboard');
  }

  
}
