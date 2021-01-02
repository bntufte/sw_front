import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private url: string = 'http://54.67.67.7:8085/StarWarsTrivia/';

  constructor(private http: HttpClient) { }

  //replace any with Question model
  getRandomQuestion(): Observable<any> {

    return this.http.get(this.url + 'question') as Observable<any>;

  }

}
