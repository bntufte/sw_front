import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreList: Score[];

  constructor( private svc: ScoresService) { }

  ngOnInit(): void {
    this.getScores();
  }
  getScores(){
    this.svc.getScores().subscribe(
      (response: Score[]) => {
        this.scoreList = response;

        console.log(response[0]);
        console.log(this.scoreList[0]);
      }
    );
  }


}

