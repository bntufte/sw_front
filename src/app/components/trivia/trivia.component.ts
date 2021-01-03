import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  public router: Router;
  public numberOfWrongQuestions: number = 0;
  public score: number;
  public question: Question;
  public subject: string;
  public answer: string;
  public info: string;
  public isCorrect: boolean;
  public needNewQuestion: boolean;

  constructor(public triv: TriviaService) { }

  ngOnInit(): void {
  }

  getQuestion() {
    this.needNewQuestion = false;
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
        } else if (randomNumber === 1) {
          this.answer = response.location;
        } else if (randomNumber === 2) {
          this.answer = response.speed;
        } else if (randomNumber === 3) {
          this.answer = response.type;
        } else if (randomNumber === 4) {
          this.answer = response.year;
        } else if (randomNumber === 5) {
          this.answer = response.planet;
        }

      }
    );

  }

  checkAnswer() {

    this.needNewQuestion = true;

    if (document.getElementById("entered-answer").nodeValue == document.getElementById("entered-answer").nodeValue.toLowerCase()) {
      this.score ++;
      this.isCorrect = true;
      this.info = "Correct! You have earned 1 point"
    } else {

      if (this.numberOfWrongQuestions === 10) {
        this.triv.enterScore(this.score);
        this.router.navigate(['/leaderboard']);
      } else {
        this.isCorrect = false;
        this.info = "Sorry, Wrong Answer";
        document.getElementById("entered-answer-label").remove();
        document.getElementById("entered-answer").remove();
        document.getElementById("submit-btn").remove();
        }

    }
  }

}
