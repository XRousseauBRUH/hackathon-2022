import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMealService } from 'src/app/services/add-meal.service';
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
  ingredients: any = null
  image: String = null
  recipeURL: String = ""
  addMeal: boolean = null;
  showMenu: boolean = false;
  @Input() fullMeal: any;
  mealToAdd: any;

  constructor(public dialog: MatDialog, private addMealService: AddMealService) {}

  public ngOnInit(): void {
    this.meal = this.fullMeal['name'];
    this.ingredients = this.fullMeal['ingredients'];
    this.receipe = this.fullMeal['receipe'];
    this.image = this.fullMeal['image'];
    this.type = this.fullMeal['type'];
    this.addMeal = true;
  }

  public display() {
    if (this.meal != 'Empty') {
      const dialogRef = this.dialog.open(ReceipeDialogComponent, {
        data:{
          meal: this.meal,
          type: this.type,
          receipe: this.receipe,
          ingredients: this.ingredients,
          image: this.image,
          url: this.recipeURL
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  async addMealToSlot() {
    this.mealToAdd = await this.addMealService.searchMeal();
    // sourceUrl
    // image
    // summary
    // title
    // dishTypes
    // cuisines
    // id
    // extendedIngredients
    this.meal = this.mealToAdd.title
    this.recipeURL = this.mealToAdd.sourceUrl
    this.ingredients = this.mealToAdd.extendedIngredients;
    console.log(this.ingredients);
    this.receipe = this.mealToAdd.summary;
    this.image = this.mealToAdd.image;
    this.type = this.mealToAdd.types;
    this.addMeal = true;
  }

  public add() {
    this.addMealToSlot();
  }

  public delete() {
    this.meal = 'Empty';
    this.type = null;
    this.addMeal = true;
  }
}
