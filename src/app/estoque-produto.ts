import { Produto } from './produto';
import { Estoque } from './estoque';

export class EstoqueProduto {
  id?: number;
  estoque?: Estoque;
  produto?: Produto;
  estoqueId?: number;
  produtoId?: number;
  quantidade?: number;
}
