import { Estoque } from './estoque';
import { Produto } from './produto';
export class EstoqueProduto {
  id: number;
  estoque: Estoque;
  produto: Produto;
  quantidade: number;

  constructor(id: number,estoque: Estoque, produto: Produto, quantidade: number) {
    this.id = id;
    this.estoque = estoque;
    this.produto = produto;
    this.quantidade = quantidade;
  }
}
