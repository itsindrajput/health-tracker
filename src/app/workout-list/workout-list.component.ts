import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  searchText: string = '';
  selectedWorkoutType: string = '';
  users: User[] = [];
  filteredUsers: User[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    // Retrieve users from localStorage
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.filteredUsers = this.users;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesName = user.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesType = this.selectedWorkoutType === '' || user.workouts.some(workout => workout.type === this.selectedWorkoutType);
      return matchesName && matchesType;
    });
  }

  paginateUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  getWorkoutTypes(user: User): string {
    return user.workouts.map(w => w.type).join(', ');
  }

  getTotalWorkoutMinutes(user: User): number {
    return user.workouts.reduce((acc, w) => acc + w.minutes, 0);
  }
}
