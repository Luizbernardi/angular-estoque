import { EstoqueProduto } from './estoque-produto';

export class Produto {
  id: number | undefined;
  nome: string | undefined;
  descricao: string | undefined;
  preco: number | undefined;
  estoqueProdutos: EstoqueProduto[] | undefined;
  dataEntrada: Date | undefined;
  precoFormatado?: string;

}
