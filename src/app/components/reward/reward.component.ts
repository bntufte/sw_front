import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Person } from 'src/app/models/person';
import { RewardService } from 'src/app/services/reward.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  public rewardPerson: Person;
  public info: string = "Congratulations! You've Earned a Reward!";

  constructor(private rew: RewardService, private router: Router) { }

  ngOnInit(): void {
  }

  sendToLeaderboard() {
    this.router.navigateByUrl("/leaderboard");
  }

awardNewCharacter();

  awardNewCharacter() {
    this.rew.getRewardCharacter().subscribe(
    (response: any) => {
      this.rewardPerson = response;
    }
  );

    this.rew.insertRewardCharacter(this.rewardPerson).subscribe(
      (response: any) => {
        if (response) {
          //success
        } else {
          //fail
        }
      }
    )
  }
}
