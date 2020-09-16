import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../oferta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  oferta: Oferta

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ofertasService.getOfertasPorId(params.id)
        .then((oferta: Oferta) => this.oferta = oferta)
    })
  }

  adicionarAoCarrinho(){
    console.log(this.oferta)    
  }

}
