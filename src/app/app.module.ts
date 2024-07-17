import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './/workout-list/workout-list.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here
    RouterModule.forRoot(routes)
  ],
  declarations: [
    WorkoutFormComponent
  ],
  // Note: Do not bootstrap the standalone component here
})
export class AppModule { }
