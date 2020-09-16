import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/oferta.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  ondeFica: string

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertasService.getOndeFica(params.id)
        .then((descricao: string) => this.ondeFica = descricao)
    })
  }

}
