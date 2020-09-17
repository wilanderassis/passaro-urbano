import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

export class CarrinhoService {
    itens: ItemCarrinho[] = []

    exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    adicionarItemCarrinho(oferta: Oferta) {
        let listaItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.titulo,
            oferta.imagens[0],
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemEmcontrado = this.itens.find((item: ItemCarrinho) => item.id === listaItemCarrinho.id)

        if (itemEmcontrado) {
            itemEmcontrado.quantidade += 1
        } else {
            this.itens.push(listaItemCarrinho)
        }
        console.log(this.exibirItens())
    }

    aumentarQuantidade(itensCarrinho: ItemCarrinho) {
        let itemEmcontrado = this.itens.find((item: ItemCarrinho) => item.id === itensCarrinho.id)
        itemEmcontrado.quantidade += 1
    }

    diminuirQuantidade(itensCarrinho: ItemCarrinho) {
        let itemEmcontrado = this.itens.find((item: ItemCarrinho) => item.id === itensCarrinho.id)
        itemEmcontrado.quantidade -= 1
        if (itemEmcontrado.quantidade === 0) {
            this.itens.splice(this.itens.indexOf(itemEmcontrado), 1)
        }

    }

    totalCarrinhoCompras(): number {
        let total = 0
        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.quantidade * item.valor)
        })
        return total
    }

    limparCarrinho() {
        this.itens = []
    }


}