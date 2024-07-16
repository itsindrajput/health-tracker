import { Routes } from '@angular/router';
import { WorkoutFormComponent } from './workout-form/workout-form.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'workout-form',
        pathMatch: 'full'
    },
    {
      path:'',
      component: WorkoutFormComponent
  },
];