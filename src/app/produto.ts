import { EstoqueProduto } from './estoque-produto';

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estoqueProdutos: EstoqueProduto[];
  dataEntrada: Date;
  precoFormatado?: string;
}
