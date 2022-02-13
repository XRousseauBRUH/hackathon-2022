import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  openIt: boolean;
  newMeal: any;

  ngOnInit(): void {}

  openSide(evnt) {
    this.openIt = evnt;
    console.log(
      'inside burgerClicked: pls. change showMenu to be:',
      this.openIt
    );
  }

  sendMealFun(evnt) {
    this.newMeal = evnt;
  }
}
 
