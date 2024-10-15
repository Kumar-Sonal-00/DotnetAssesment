import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus',
  standalone: true
})
export class TaskStatusPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(completed: boolean, date?: Date): string {
  //   return completed ? `Completed on: ${date || new Date().toLocaleDateString()}` : 'Pending';
  // }

  transform(task: any): string {
    if (task.completed) {
      return `Completed on: ${new Date().toLocaleDateString()}`;
    } else {
      return 'Pending';
    }
  }

}
