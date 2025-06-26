import { Routes } from '@angular/router';
import { loginPage } from './auth/login.page';
import { studentRoutes } from './dashboard/students/student.routes';
import { NoAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [

  {
    path: '',
    component: loginPage,
    canActivate: [NoAuthGuard],
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
