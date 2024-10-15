import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe, NgForOf,CommonModule,RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }

  markAsCompleted(task: any): void {
    task.completed = true;
    this.taskService.updateTask(task).subscribe();
  }

}
