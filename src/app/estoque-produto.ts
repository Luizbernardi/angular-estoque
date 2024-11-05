import { Estoque } from './estoque';
import { Produto } from './produto';
export class EstoqueProduto {
  id: number | undefined;
  estoque: Estoque | undefined;
  produto: Produto | undefined;
  quantidade: number | undefined;


}
