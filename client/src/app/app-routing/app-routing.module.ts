import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { MealSlotComponent } from '../components/meal-slot/meal-slot.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'meal', component: MealSlotComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
