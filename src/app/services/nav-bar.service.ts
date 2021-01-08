import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  
  private ServerUrl: string = 'http://54.67.67.7:8085/StarWarsTrivia/';
  public visible: boolean;

  constructor(private http: HttpClient) { 
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  endSession() {
    this.http.get(this.ServerUrl + '/logout');
  }

}
