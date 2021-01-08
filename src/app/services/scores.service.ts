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
    
    return this.http.get('http://localhost:8080/StarWarsTrivia/score') as Observable<Score[]>;
  }

  
}
