import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Person } from 'src/app/models/person';
import { User } from 'src/app/models/user';
import { RewardService } from 'src/app/services/reward.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  public userInfo: User;
  public doesNotHaveReward: boolean = true;
  public rewardPerson: Person = new Person("", 0, 0, "", "", "", "", "");
  public info: string = "";

  constructor(private rew: RewardService, private router: Router) { }

  ngOnInit(): void {
  }

  sendToLeaderboard() {
    this.router.navigateByUrl("/score");
  }

  awardNewCharacter() {
    this.rew.getRewardCharacter().subscribe(
    (response: any) => {
      this.rewardPerson = response;
      console.log(this.rewardPerson);
    }
  );

  this.doesNotHaveReward = false;

  this.rew.getUserInfo().subscribe(
    (response: User) => {
      this.userInfo = response;
    }
  )

    this.rew.insertRewardCharacter(this.userInfo).subscribe(
      (response: any) => {
        if (response.status != 201) {
          this.info="Error. Your reward character could not be loaded."
        }
      }
    )
  }
}
