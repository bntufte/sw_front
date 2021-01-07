import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Question } from 'src/app/models/question';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  public playerAnswer: string;
  public numberOfWrongQuestions: number = 0;
  public winningStreak: number = 0;
  public hasEarnedReward: boolean = false;
  public score: number = 0;
  public question: Question;
  public subject: string;
  public answer: string;
  public info: string;
  public isCorrect: boolean;
  public answeredCurrentQuestion: boolean = false;
  public needNewQuestion: boolean = true;
  public submittedAnswer: boolean = false;

  constructor(public triv: TriviaService, private router: Router) { }

  ngOnInit(): void {
    this.needNewQuestion = true;

  }

  needQ(): boolean {

    if (this.needNewQuestion) {
      return true;
    } else {
      return false;
    }

  }

  getQuestion() {
    this.needNewQuestion = false;
    this.submittedAnswer = false;
    this.info = "";
  
    let randomNumber: number = this.triv.getRandomInt(25) + 1;

    try {
        this.triv.getRandomQuestion(randomNumber).subscribe(
        (response: Question) => {
          this.question = response;
        }
      );
    } catch (error) {
      console.log("error");
      this.needNewQuestion = true;
    }

    

    this.triv.getRandomStarWarsData(randomNumber).subscribe(
      (response: any) => {

        if (response.name != null) {
          this.subject = response.name;
        } else {
          this.subject = response.title;
        }  
        //console.log(this.subject);
        
        if (randomNumber === 1) {
          this.answer = response.height;
        } else if (randomNumber === 2) {
          this.answer = response.mass;
        } else if (randomNumber === 3) {
          this.answer = response.hair_color;
        } else if (randomNumber === 4) {
          this.answer = response.skin_color;
        } else if (randomNumber === 5) {
          this.answer = response.eye_color;
        } else if (randomNumber === 6) {
          this.answer = response.birth_year;
        } else if (randomNumber === 7) {
          this.answer = response.gender;
        } else if (randomNumber === 8) {
          this.answer = response.rotation_period;
        } else if (randomNumber === 9) {
          this.answer = response.orbital_period;
        } else if (randomNumber === 10) {
          this.answer = response.diameter;
        } else if (randomNumber === 11) {
          this.answer = response.climate;
        } else if (randomNumber === 12) {
          this.answer = response.gravity;
        } else if (randomNumber === 13) {
          this.answer = response.surface_water;
        } else if (randomNumber === 14) {
          this.answer = response.population;
        } else if (randomNumber === 15) {
          this.answer = response.episode_id;
        } else if (randomNumber === 16) {
          this.answer = response.director;
        } else if (randomNumber === 17) {
          this.answer = response.release_date;
        } else if (randomNumber === 18) {
          this.answer = response.length;
        } else if (randomNumber === 19) {
          this.answer = response.crew;
        } else if (randomNumber === 20) {
          this.answer = response.passengers;
        } else if (randomNumber === 21) {
          this.answer = response.cargo_capacity;
        } else if (randomNumber === 22) {
          this.answer = response.hyperdrive_rating;
        } else if (randomNumber === 23) {
          this.answer = response.starship_class;
        } else {
          this.answer = null;
        }
        //console.log(this.answer);

      }
    );

  }

  checkAnswer() {
    this.submittedAnswer = true;
    this.needNewQuestion = true;

    if (this.playerAnswer.toLowerCase() === this.answer) {
      this.score += 1;
      this.winningStreak += 1;

      if (this.winningStreak === 6) {
        this.hasEarnedReward = true;
      }

      this.isCorrect = true;
      this.info = "Correct! You have earned 1 point"
    } else {

      this.numberOfWrongQuestions += 1;
      this.winningStreak = 0;

      if (this.numberOfWrongQuestions === 10) {
        this.triv.enterScore(this.score);

        if (this.hasEarnedReward === true) {
          this.router.navigateByUrl("/reward");
        } else {
          this.router.navigateByUrl("/leaderboard");
        }
      } else {
        this.isCorrect = false;
        this.info = "Sorry, Wrong Answer";

        }

    }
  }

}
