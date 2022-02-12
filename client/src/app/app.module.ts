import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './components/app/app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MealSlotComponent } from './components/meal-slot/meal-slot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MainPageComponent,
    MealSlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
