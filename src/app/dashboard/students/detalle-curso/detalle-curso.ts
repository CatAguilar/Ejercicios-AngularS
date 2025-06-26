import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";


@Component({
  standalone: true,
  templateUrl: './detalle-curso.html',
  imports: [CommonModule, RouterModule],
})



export class DetalleCurso{

  id: string | null = null;
  curso: { id: number; name: string; description: string; teacher: string } | undefined;

  cursos = [
    { id: 1, name: 'Geometría', description: 'Figuras y planos', teacher: 'Rodriguez' },
    { id: 2, name: 'Álgebra', description: 'Ecuaciones y funciones', teacher: 'González' },
  ];

  constructor(private route: ActivatedRoute) {
  this.id = this.route.snapshot.paramMap.get('id');

  if (this.id !== null) {
    const idNumber = Number(this.id);  // convierte explícito y limpio
    this.curso = this.cursos.find(c => c.id === idNumber);
    }
  }

}

