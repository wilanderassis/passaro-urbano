import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  ofertas: Oferta[]

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasCategoria('restaurante')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
