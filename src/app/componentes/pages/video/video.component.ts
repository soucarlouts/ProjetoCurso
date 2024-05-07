import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AulasService } from "../../../services/aulas.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})


export class VideoComponent {
  aula!: any;

  constructor(
    private aulasService: AulasService,
    private route: ActivatedRoute,
  ) {}
  

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.aulasService
      .getAula(id).subscribe(item =>
      (this.aula = item));
  }
}
