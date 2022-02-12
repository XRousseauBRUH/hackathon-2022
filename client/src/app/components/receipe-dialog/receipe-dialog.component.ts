import { Component, OnInit } from '@angular/core';
import { MealSlotComponent } from '../meal-slot/meal-slot.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-receipe-dialog',
  templateUrl: './receipe-dialog.component.html',
  styleUrls: ['./receipe-dialog.component.scss']
})
export class ReceipeDialogComponent implements OnInit {
  meal:string = null
  type:string = null
  receipe:string = null
  ingredients:string = null
  image: string = null

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.meal = this.data['meal']
    this.type = this.data['type']
    this.ingredients = this.data['ingredients']
    this.image = this.data['image']
    this.receipe = this.data['receipe']
  }
}
