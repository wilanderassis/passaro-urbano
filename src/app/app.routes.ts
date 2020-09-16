import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { OfertaComponent } from "./oferta/oferta.component";
import { OrdemCompraComponent } from "./ordem-compra/ordem-compra.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurante', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta', component: HomeComponent },
    { path: 'oferta/:id', component: OfertaComponent },
    { path: 'ordem-compra', component: OrdemCompraComponent },
]