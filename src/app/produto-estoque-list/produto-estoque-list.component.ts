import { ProdutoEstoqueService } from '../produto-estoque.service';
import { EstoqueProduto } from './../estoque-produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-estoque-list',
  templateUrl: './produto-estoque-list.component.html',
  styleUrl: './produto-estoque-list.component.css'
})
export class ProdutoEstoqueListComponent implements OnInit {

  produtoEstoques: EstoqueProduto[] = [];
  precoTotalEstoque: number = 0;
  precosTotaisProdutos: number[] = [];

  constructor(private produtoEstoqueService: ProdutoEstoqueService ) { }

  ngOnInit(): void {
    this.getProdutoEstoques();
  }

   private getProdutoEstoques(): void {
    this.produtoEstoqueService.getProdutoEstoqueList().subscribe(data => {
      this.produtoEstoques = data;
    });
  }

  private calcularPrecosTotais(): void {
    this.precoTotalEstoque = 0;
    this.precosTotaisProdutos = this.produtoEstoques.map(produtoEstoque => {
      const precoTotal = produtoEstoque.quantidade * produtoEstoque.produto.preco;
      this.precoTotalEstoque += precoTotal;
      return precoTotal;
    });
  }

}
