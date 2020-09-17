export class ItemCarrinho {
    constructor(
        public id: number,
        public titulo: string,
        public img: object,
        public descricao: string,
        public valor: number,
        public quantidade: number
    ) { }
}