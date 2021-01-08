import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { Score } from 'src/app/models/Score';



@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  score: BigInteger;
  user: BigInteger;
  date:Date;
  scoreList:Score[];

  constructor( private svc:ScoresService) { }

  ngOnInit(): void {
    this.getScores();
  }
  getScores(){
    this.svc.getAllScores().subscribe(
      (response: Score[]) => {
      
      this.scoreList =response;
      
      

    }
  );

  }


}

