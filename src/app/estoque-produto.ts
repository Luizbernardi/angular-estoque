import { Produto } from './produto';
import { Estoque } from './estoque';

export class EstoqueProduto {
  id: number | undefined;
  estoque: Estoque | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;
}
