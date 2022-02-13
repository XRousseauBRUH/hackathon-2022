import { Component, Input, OnChanges, OnInit, EventEmitter, Output } from '@angular/core';
//import { MatSidenav } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddMealService } from 'src/app/services/add-meal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() subMenuState;
  @Output() newMeal = new EventEmitter(); 
  showMenu: boolean = true;
  request: string = ""
  cuisine: String[] = ["African","American", "British","Cajun","Chinese","Eastern European","European", "French","German","Vietnamese","Thai","Spanish", "Southern", "Nordic",  "Middle Eastern", "Mexican","Mediterranean",
                      "Greek", "Indian", "Irish", "Italian", "Italian", "Jewish", "Korean", "Latin American"]
  
  constructor(private addMealService: AddMealService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.showMenu = this.subMenuState
  }

  randomizeMeal() {
    this.newMeal.emit(this.addMealService.searchMeal());
  }

  public onSubmit(request:string){
    console.log(request)
  }

}
