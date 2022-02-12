import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MealSlotComponent } from './components/meal-slot/meal-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MainPageComponent,
    MealSlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
