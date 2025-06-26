import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-student-cursos',
  templateUrl: './cursos.page.html',
  imports: [RouterLink, CommonModule],
})


export class CursosPage{
  cursos = [
    {id: 1, name: 'Geometría', description: 'Aprende sobre figuras, planos y más.', teacher: 'Profesor Rodriguez'},
    {id: 2, name: 'Geografía', description: 'estudia la superficie terrestre, incluyendo sus características físicas, biológicas y humanas.', teacher: 'Profesor Hernádez'},
  ];

}
