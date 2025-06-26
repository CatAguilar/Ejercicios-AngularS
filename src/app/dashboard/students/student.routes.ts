import { AuthGuard } from './../../guards/auth.guard';
import { Routes } from "@angular/router";
import { CursosPage } from "./cursos.page";
import { DashboardPage } from "./dashboard.page";
import { StudentLayoutPage } from "./student-layout.page";
import { DetalleCurso } from "./detalle-curso/detalle-curso";


export const studentRoutes: Routes = [
  {
    path: '',
    component: StudentLayoutPage,
    children: [
      { path: 'summary', component: DashboardPage },
      { path: 'cursos', component: CursosPage },
      { path: 'cursos/:id', component: DetalleCurso },
    ],
    canActivate: [AuthGuard],
  }
];
