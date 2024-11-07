import { Router } from '@angular/router';
import { ProdutoEstoqueService } from '../produto-estoque.service';
import { EstoqueProduto } from './../estoque-produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-estoque-list',
  templateUrl: './produto-estoque-list.component.html',
  styleUrls: ['./produto-estoque-list.component.css']
})
export class ProdutoEstoqueListComponent implements OnInit {

  page: number = 1;
  itemsPerPage: number = 10;
  totalElements: number = 0;
  produtoEstoques: EstoqueProduto[] = [];
  precoTotalEstoque: number = 0;
  precosTotaisProdutos: number[] = [];

  constructor(private produtoEstoqueService: ProdutoEstoqueService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProdutoEstoques();
  }

  private getProdutoEstoques(): void {
    this.produtoEstoqueService.getEstoqueProdutoList(this.page - 1, this.itemsPerPage).subscribe(data => {
      this.produtoEstoques = data.content;
      this.totalElements = data.totalElements;
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

  onPageChange(event: any): void {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage;
    this.getProdutoEstoques();
  }
}
