import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "./shared/pedido.model";

import 'rxjs/add/operator/map'

@Injectable()
export class OrdemCompraService {
    constructor(
        public http: Http
    ) { }

    finalizarCompra(pedido: Pedido): Observable<number> {
        let f = new Headers()
        f.append('Content-type', 'application/json')
        return this.http.post(
            `http://localhost:3000/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: f })
        )
            .map((resposta: Response) => resposta.json().id)
    }
}