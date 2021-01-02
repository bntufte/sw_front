import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  public question: Question;

  constructor(public triv: TriviaService) { }

  ngOnInit(): void {
  }

  getQuestion() {
    //randomly get question from Question
    //randomly get data from API
    this.triv.getRandomQuestion().subscribe(
      (response: Question) => {
        this.question = response;
      }
    );
  }

  checkAnswer() {
    if (document.getElementById("entered-answer").nodeValue == this.question.answer) {
      this.triv.awardPoints();
    } else {
      document.getElementById("wrong-answer").innerHTML = "Sorry, Wrong Answer";
      document.getElementById("entered-answer-label").remove();
      document.getElementById("entered-answer").remove();
      document.getElementById("submit-btn").remove();
    }
  }

}
