import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RewardComponent } from './components/reward/reward.component';
import { TriviaComponent } from './components/trivia/trivia.component';

const routes: Routes = [

  // {
  //   path : "login",
  //   component : LoginComponent
  // },

  {
    path : "",
    component : LoginComponent
  },

  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: 'trivia',
    component : TriviaComponent
  },
  {
    path: 'reward',
    component : RewardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
