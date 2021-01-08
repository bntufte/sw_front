import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  
  private ServerUrl: string = 'http://localhost:8069/StarWarsTrivia/';
  public visible: boolean;

  constructor(private http: HttpClient) { 
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  endSession() {
    this.http.get(this.ServerUrl + '/logout');
  }

}
