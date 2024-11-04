import { EstoqueProduto } from './estoque-produto';

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estoqueProdutos: EstoqueProduto[];
  dataEntrada: Date;
  precoFormatado?: string;

  constructor(id: number, nome: string, descricao: string, preco: number, estoqueProdutos: EstoqueProduto[], dataEntrada: Date) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.estoqueProdutos = estoqueProdutos;
    this.dataEntrada = dataEntrada;
  }
}
