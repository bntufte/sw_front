import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

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
    path: 'score',
    component : ScoreboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
