import { Estoque } from './estoque';
import { Produto } from './produto';
export class EstoqueProduto {
  id: number;
  estoque: Estoque;
  produto: Produto;
  quantidade: number;

}
