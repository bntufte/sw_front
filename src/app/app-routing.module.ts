import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
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
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: 'trivia',
    component : TriviaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
