import { Router } from '@angular/router';
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

  constructor(private produtoEstoqueService: ProdutoEstoqueService,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.getProdutoEstoques();

  }

  private getProdutoEstoques(): void {
    this.produtoEstoqueService.getProdutoEstoqueList().subscribe(data => {
      this.produtoEstoques = data;
      this.calcularPrecosTotais();
    });
  }

  private calcularPrecosTotais(): void {
    this.precoTotalEstoque = 0;
    this.precosTotaisProdutos = this.produtoEstoques.map(produtoEstoque => {
      const quantidade = produtoEstoque.quantidade ?? 0;
      const preco = produtoEstoque.produto?.preco ?? 0;
      const precoTotal = quantidade * preco;
      this.precoTotalEstoque += precoTotal;
      return precoTotal;
    });
  }

  calcularTotalEstoque(estoqueId: number): number {
    return this.produtoEstoques
      .filter(produtoEstoque => produtoEstoque.estoque?.id === estoqueId)
      .reduce((total, produtoEstoque) => total + (produtoEstoque.quantidade ?? 0) * (produtoEstoque.produto?.preco ?? 0), 0);
  }

  updateProdutoEstoque(id: number){
    this.router.navigate(['update-estoque-produtos', id]);
  }

  deleteProdutoEstoque(id: number){
    this.produtoEstoqueService.deleteEstoqueProduto(id).subscribe(data => {
      console.log(data);
      this.getProdutoEstoques();
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este Estoque Produto?')) {
      this.deleteProdutoEstoque(id);
    }
  }



}
