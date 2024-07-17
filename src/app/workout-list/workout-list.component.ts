import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  paginatedUsers: User[] = [];
  currentPage = 1;
  itemsPerPage = 3;
  pagesArray: number[] = [];

  constructor() {}

  ngOnInit() {
    this.loadInitialUsers();
    this.loadUsersFromLocalStorage();
    this.paginateUsers();
    this.generatePagesArray();
  }

  loadInitialUsers() {
    this.users = [
      {
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      }
    ];
  }

  loadUsersFromLocalStorage() {
    const localStorageUsers = JSON.parse(localStorage.getItem('users') || '[]');
    localStorageUsers.forEach((localStorageUser: any) => {
      const userIndex = this.users.findIndex(user => user.name === localStorageUser.username);
      if (userIndex !== -1) {
        this.users[userIndex].workouts.push({
          type: localStorageUser.workoutType,
          minutes: localStorageUser.workoutMinutes
        });
      } else {
        this.users.push({
          name: localStorageUser.username,
          workouts: [
            {
              type: localStorageUser.workoutType,
              minutes: localStorageUser.workoutMinutes
            }
          ]
        });
      }
    });
    this.generatePagesArray();
  }

  paginateUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.paginateUsers();
  }

  generatePagesArray() {
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  getTotalWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  getWorkoutTypes(user: User): string {
    return user.workouts.map(workout => workout.type).join(', ');
  }
}