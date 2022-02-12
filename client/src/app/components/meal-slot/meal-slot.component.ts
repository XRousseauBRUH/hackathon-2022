import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceipeDialogComponent } from '../receipe-dialog/receipe-dialog.component';

@Component({
  selector: 'app-meal-slot',
  templateUrl: './meal-slot.component.html',
  styleUrls: ['./meal-slot.component.css']
})
export class MealSlotComponent implements OnInit {
  meal: String = null
  type: String = null
  action: String = null
  addMeal: Boolean = null

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
    //Call service to process the request
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
