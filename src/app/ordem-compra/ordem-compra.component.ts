import { Component, OnInit } from '@angular/core';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { CarrinhoService } from '../carrinho.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Pedido } from "../shared/pedido.model";
import { OrdemCompraService } from "../ordem-compra.service";

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  itensCarrinho: ItemCarrinho[]
  idPedidoCompra: number
  botaoCompra: boolean

  formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required]),
    'numero': new FormControl(null, [Validators.required]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required]),
  })

  constructor(
    public carrinhoService: CarrinhoService,
    public ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
    console.log(this.itensCarrinho)
    if (this.itensCarrinho.length === 0) {
      this.botaoCompra = true
    }
  }

  limparCarrinho() {
   this.carrinhoService.limparCarrinho()
  }

  confirmarCompra() {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    } else {
      let pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.itensCarrinho
      )

      if (this.itensCarrinho.length === 0) {
        console.log('Seu carrinho está vazio: ', this.itensCarrinho.length)
      } else {
        this.ordemCompraService.finalizarCompra(pedido)
          .subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido
            this.limparCarrinho()
          })
      }
    }    
  }

  aumentarQuantidade(item: ItemCarrinho) {
    this.carrinhoService.aumentarQuantidade(item)
  }

  diminuirQuantidade(item: ItemCarrinho) {
    this.carrinhoService.diminuirQuantidade(item)
  }

}
