import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  public question: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  getQuestion(): Question {

  }

}
