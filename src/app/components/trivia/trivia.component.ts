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

  getQuestion(): any {

    //randomly get question from Question
    //randomly get data from API

    this.question = 'This is a Question';
  }

}
