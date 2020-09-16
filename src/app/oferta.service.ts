import { Http, Response } from "@angular/http";
import { Oferta } from "./shared/oferta.model";
import { URL_API } from "./app.api";
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {
    constructor(
        private http: Http
    ) { }

    getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

    getOfertasCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }
}