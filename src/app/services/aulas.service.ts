import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  cursos = [
    { id: 1, titulo: "Aula Numero 1",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf1.pdf" },
    { id: 2, titulo: "Aula Numero 2",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 3, titulo: "Aula Numero 3",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 4, titulo: "Aula Numero 4",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 5, titulo: "Aula Numero 5",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 6, titulo: "Aula Numero 6",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 7, titulo: "Aula Numero 7",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
    { id: 8, titulo: "Aula Numero 8",video: "RickAstley.mp4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium", pdf:"pdf.pdf" },
  ];

  constructor() { }

  getAulas(): any[] { // Corrigido para não receber parâmetros
    return this.cursos;
  }

  getAula(id: number): Observable<any> {
    const aula = this.cursos.find(curso => curso.id === id);
    return of(aula);
  }
}
