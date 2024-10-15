import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './app/Components/task-list/task-list.component';
import { AddTaskComponent } from './app/Components/add-task/add-task.component';
import { TaskDetailsComponent } from './app/Components/task-details/task-details.component';
import { LoginComponent } from './app/Components/login/login.component';
import { authGuard } from './app/auth.guard';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(TaskListComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'tasks', component: TaskListComponent, canActivate: [authGuard] },
      { path: 'tasks/add', component: AddTaskComponent, canActivate: [authGuard] },
      { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [authGuard] },
      { path: 'login', component: LoginComponent }
    ]),
    importProvidersFrom(HttpClientModule, FormsModule)
  ]
});