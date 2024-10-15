import { Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Redirect to Task List by default
    { path: 'tasks', component: TaskListComponent, canActivate: [authGuard] },
    { path: 'add-task', component: AddTaskComponent, canActivate: [authGuard] },
    { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent }
];
