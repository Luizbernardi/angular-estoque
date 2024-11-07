import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalElements: number = 0;

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos(): void {
    this.produtoService.getProdutoListPage(this.page - 1, this.itemsPerPage).subscribe((data: any) => {
      this.produtos = data.content;
      this.totalElements = data.totalElements;
    });
  }

  updateProduto(id: number): void {
    this.router.navigate(['update-produtos', id]);
  }

  deleteProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(data => {
      console.log(data);
      this.getProdutos();
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.deleteProduto(id);
    }
  }

  onPageChange(event: number): void {
    this.page = event;
    this.getProdutos();
  }

  onItemsPerPageChange(): void {
    this.page = 1; // Reset to first page
    this.getProdutos();
  }
}
