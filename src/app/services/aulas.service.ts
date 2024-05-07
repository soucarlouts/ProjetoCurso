import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  cursos = [
    { id: 1, titulo: "Aula Numero 1", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 2, titulo: "Aula Numero 2", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 3, titulo: "Aula Numero 3", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 4, titulo: "Aula Numero 4", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 5, titulo: "Aula Numero 5", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 6, titulo: "Aula Numero 6", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 7, titulo: "Aula Numero 7", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
    { id: 8, titulo: "Aula Numero 8", descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium" },
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
