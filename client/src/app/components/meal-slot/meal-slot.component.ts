import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from 'src/app/services/sidenav.service';
import { ReceipeDialogComponent } from '../receipe-dialog/receipe-dialog.component';

@Component({
  selector: 'app-meal-slot',
  templateUrl: './meal-slot.component.html',
  styleUrls: ['./meal-slot.component.css'],
})
export class MealSlotComponent implements OnInit {
  @Output() menuState = new EventEmitter();
  meal: String = null;
  type: String = null;
  receipe: String = null
  ingredients: String = null
  image: String = null
  action: String = null;
  addMeal: boolean = null;
  showMenu: boolean = false;
  @Input() fullMeal: any;
  @Input() presentDay: any;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    console.log(this.fullMeal);
    console.log(this.presentDay);
    console.log(this.fullMeal['name']);
    this.meal = this.fullMeal['name'];
    this.ingredients = this.fullMeal['ingredients'];
    this.receipe = this.fullMeal['receipe'];
    this.image = this.fullMeal['image'];
    this.type = this.fullMeal['type'];
    this.action = 'add';
    this.addMeal = true;
  }

  public display() {
    if (this.meal != 'empty') {
      const dialogRef = this.dialog.open(ReceipeDialogComponent, {
        data:{
          meal: this.meal,
          type: this.type,
          receipe: this.receipe,
          ingredients: this.ingredients,
          image: this.image
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  public add() {
    this.showMenu = true;
    this.menuState.emit(this.showMenu);
    this.type = this.fullMeal['type'];
    this.addMeal = false;
  }

  public delete() {
    this.meal = 'empty';
    this.type = null;
    this.addMeal = true;
  }
}
