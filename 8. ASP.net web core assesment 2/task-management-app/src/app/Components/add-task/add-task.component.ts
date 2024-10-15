import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value).subscribe(() => this.router.navigate(['/tasks']));
    }
  }

}
