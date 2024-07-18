import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutFormComponent } from './workout-form.component';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [WorkoutFormComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.workout.username).toBe('');
    expect(component.workout.workoutType).toBe('');
    expect(component.workout.workoutMinutes).toBeNull();
    expect(fixture.nativeElement.querySelector('form').checkValidity()).toBeFalse();
  });

  it('form should be valid when all fields are filled', () => {
    component.workout.username = 'Test User';
    component.workout.workoutType = 'Running';
    component.workout.workoutMinutes = 30;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('form').checkValidity()).toBeTrue();
  });

  it('should store workout in localStorage and navigate to workout list on form submit', () => {
    spyOn(localStorage, 'setItem').and.callThrough();
    spyOn(localStorage, 'getItem').and.returnValue('[]');

    component.workout.username = 'Test User';
    component.workout.workoutType = 'Running';
    component.workout.workoutMinutes = 30;

    fixture.detectChanges();
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));

    expect(localStorage.getItem).toHaveBeenCalledWith('workouts');
    expect(localStorage.setItem).toHaveBeenCalledWith('workouts', jasmine.any(String));
    expect(router.navigate).toHaveBeenCalledWith(['/workout-list']);
  });
});
