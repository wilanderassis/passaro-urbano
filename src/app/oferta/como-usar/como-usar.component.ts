import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/oferta.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  comoUsar:string

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertasService.getComoUsar(params.id)
        .then((descricao: string) => this.comoUsar = descricao)
    })
  }

}
