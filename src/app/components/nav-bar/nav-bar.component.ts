import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit(): void {
  }

  logout() {
    this.nav.endSession();
  }

}
