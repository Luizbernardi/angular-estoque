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

  produtoEstoques: EstoqueProduto[] = [];
  allProdutoEstoques: EstoqueProduto[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalElements: number = 0;
  precosTotaisProdutos: number[] = [];
  precoTotalEstoque: number = 0;

  constructor(private produtoEstoqueService: ProdutoEstoqueService, private router: Router) { }

  ngOnInit(): void {
    this.getProdutoEstoques();
    this.getAllProdutoEstoques();
  }

  private getProdutoEstoques(): void {
    this.produtoEstoqueService.getProdutoEstoqueListPage(this.page - 1, this.itemsPerPage).subscribe((data: any) => {
      this.produtoEstoques = data.content;
      this.totalElements = data.totalElements;
      this.calcularPrecosTotais();
    });
  }

  private getAllProdutoEstoques(): void {
    this.produtoEstoqueService.getAllProdutoEstoque().subscribe((data: EstoqueProduto[]) => {
      this.allProdutoEstoques = data;
      this.calcularPrecoTotalEstoque();
    });
  }

  calcularPrecosTotais(): void {
    this.precosTotaisProdutos = this.produtoEstoques.map(pe => (pe.quantidade ?? 0) * ((pe.produto?.preco ?? 0)));
  }

  calcularPrecoTotalEstoque(): void {
    this.precoTotalEstoque = this.allProdutoEstoques.reduce((acc, pe) => acc + (pe.quantidade ?? 0) * ((pe.produto?.preco ?? 0)), 0);
  }

  calcularTotalEstoque(estoqueId: number): number {
    const estoques = this.allProdutoEstoques.filter(pe => pe.estoque && pe.estoque.id === estoqueId);
    return estoques.reduce((acc, pe) => acc + (pe.quantidade ?? 0) * (pe.produto?.preco ?? 0), 0);
  }

  updateProdutoEstoque(id: number): void {
    this.router.navigate(['update-estoque-produtos', id]);
  }

  deleteProdutoEstoque(id: number): void {
    this.produtoEstoqueService.deleteEstoqueProduto(id).subscribe(data => {
      console.log(data);
      this.getProdutoEstoques();
      this.getAllProdutoEstoques();
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto do estoque?')) {
      this.deleteProdutoEstoque(id);
    }
  }

  onPageChange(event: number): void {
    this.page = event;
    this.getProdutoEstoques();
  }

  onItemsPerPageChange(): void {
    this.page = 1; // Reset to first page
    this.getProdutoEstoques();
  }
}
