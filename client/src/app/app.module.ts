import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './components/app/app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MealSlotComponent } from './components/meal-slot/meal-slot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceipeDialogComponent } from './components/receipe-dialog/receipe-dialog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MainPageComponent,
    MealSlotComponent,
    ReceipeDialogComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule,
    //MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
