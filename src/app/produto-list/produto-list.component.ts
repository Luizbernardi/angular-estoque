import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  page: number = 0;
  itemsPerPage: number = 10;
  totalElements: number = 0;

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos() {
    this.produtoService.getProdutoListPage(this.page, this.itemsPerPage).subscribe(data => {
      this.produtos = data.content;
      this.totalElements = data.totalElements;
    });
  }

  updateProduto(id: number){
    this.router.navigate(['update-produtos', id]);
  }

  deleteProduto(id: number){
    this.produtoService.deleteProduto(id).subscribe(data => {
      console.log(data);
      this.getProdutos();
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este Produto?')) {
      this.deleteProduto(id);
    }
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getProdutos();
  }
}
