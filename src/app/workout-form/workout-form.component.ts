import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      // Retrieve existing data from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

      // Check if the user already exists
      let user = existingUsers.find((u: any) => u.name === formData.username);
      if (user) {
        // Add new workout to existing user
        user.workouts.push({
          type: formData.workoutType,
          minutes: formData.workoutMinutes
        });
      } else {
        // Create new user with the workout
        user = {
          name: formData.username,
          workouts: [{
            type: formData.workoutType,
            minutes: formData.workoutMinutes
          }]
        };
        existingUsers.push(user);
      }

      // Save updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Navigate to the workout list component
      this.router.navigate(['/workout-list']);
    }
  }
}
