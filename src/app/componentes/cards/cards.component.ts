import { Component, OnInit } from '@angular/core';
import { AulasService } from "../../services/aulas.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  aulas!: any[];

  constructor(
    private aulasService: AulasService
  ) { }

  ngOnInit() {
    this.aulas = this.aulasService.getAulas();
  }
}




