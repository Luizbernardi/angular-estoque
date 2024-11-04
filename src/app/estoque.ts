import { EstoqueProduto } from './estoque-produto';

export class Estoque {
  id: number;
  nome: string;
  dataEntrada: Date;
  estoqueProdutos: EstoqueProduto[];

  constructor(id: number, nome: string, dataEntrada: Date, estoqueProdutos: EstoqueProduto[]) {
    this.id = id;
    this.nome = nome;
    this.dataEntrada = dataEntrada;
    this.estoqueProdutos = estoqueProdutos;
  }


}
