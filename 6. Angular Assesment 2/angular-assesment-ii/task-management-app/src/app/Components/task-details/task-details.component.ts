import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from '../../pipes/task-status.pipe';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule,TaskStatusPipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTaskById(id).subscribe(task => this.task = task);
  }

}
