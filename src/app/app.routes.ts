import { Routes } from '@angular/router';
import { loginPage } from './auth/login.page';
import { StudentLayoutPage } from './dashboard/students/student-layout.page';
import { studentRoutes } from './dashboard/students/student.routes';

export const routes: Routes = [

  {
    path: '',
    component: loginPage,
  },

  {
    path: 'dashboard/students',
    children: studentRoutes,
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },


];
