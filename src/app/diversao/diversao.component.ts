import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  ofertas: Oferta[]

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasCategoria('diversao')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
