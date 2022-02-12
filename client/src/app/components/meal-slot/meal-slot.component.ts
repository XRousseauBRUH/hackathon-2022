import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from 'src/app/services/sidenav.service';
import { ReceipeDialogComponent } from '../receipe-dialog/receipe-dialog.component';

@Component({
  selector: 'app-meal-slot',
  templateUrl: './meal-slot.component.html',
  styleUrls: ['./meal-slot.component.css']
})
export class MealSlotComponent implements OnInit {
  @Output() menuState = new EventEmitter();
  meal: String = null
  type: String = null
  action: String = null
  addMeal: boolean = null
  showMenu: boolean = false

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.meal = "empty"
    this.action = "add"
    this.type = null
    this.addMeal = true
  }

  public display(){
    if(this.meal != "empty") {
      const dialogRef = this.dialog.open(ReceipeDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  public add(){
    this.showMenu = true
    this.menuState.emit(this.showMenu)
    this.meal = "lasagne"
    this.type = "dinner"
    this.addMeal = false
  }

  public delete(){
    this.meal = "empty"
    this.type = null
    this.addMeal = true
  }

}
