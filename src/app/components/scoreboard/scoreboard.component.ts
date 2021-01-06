import { Component, OnInit } from '@angular/core';
import {}

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  score: BigInteger;
  username: string;
  date:Date;
  scoreList

  constructor( private svc: ) { }

  ngOnInit(): void {
    this.getScores();
  }
  getScores(){
    this.svc.getScores();
  }

}
