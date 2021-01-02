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
  public subject: string;
  public answer: string;
  public info: string = '';

  constructor(public triv: TriviaService) { }

  ngOnInit(): void {
  }

  getQuestion() {
    //randomly get question from Question
    //randomly get data from API
    let randomNumber: number = this.triv.getRandomInt(6 + 1);

    this.triv.getRandomQuestion(randomNumber).subscribe(
      (response: Question) => {
        this.question = response;
      }
    );

    this.triv.getRandomStarWarsData(randomNumber).subscribe(
      (response: any) => {
        this.subject = response.name;
        
        if (randomNumber === 0) {
          this.answer = response.height;
        }

      }
    );

  }

  checkAnswer(answer: string) {

    if (document.getElementById("entered-answer").nodeValue == answer.toLocaleLowerCase()) {
      this.info = this.triv.awardPoints();
    } else {
      this.info = "Sorry, Wrong Answer";
      document.getElementById("entered-answer-label").remove();
      document.getElementById("entered-answer").remove();
      document.getElementById("submit-btn").remove();
    }
  }

}
