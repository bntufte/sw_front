import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// ariaExpanded:any = document.getElementById("dropdown-profile").getAttribute("aria-expanded");

// dropdown() {
//   if (this.ariaExpanded == false) {
//     this.ariaExpanded = true;
//   } else {
//     this.ariaExpanded = false;
//   }
// }

}
