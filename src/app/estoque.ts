import { EstoqueProduto } from './estoque-produto';

export class Estoque {
  id: number;
  nome: string;
  dataEntrada: Date;
  estoqueProdutos: EstoqueProduto[];


}
