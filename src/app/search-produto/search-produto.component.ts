import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-search-produto',
  templateUrl: './search-produto.component.html',
  styleUrls: ['./search-produto.component.css']
})
export class SearchProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  termo: string = '';
  page: number = 0;
  itemsPerPage: number = 10;
  totalElements: number = 0;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termo = params['termo'] || '';
      this.page = params['page'] ? +params['page'] : 0;
      this.searchProdutos();
    });
  }

  searchProdutos(): void {
    if (this.termo.trim()) {
      this.produtoService.findAllMatches(this.termo, this.page, this.itemsPerPage).subscribe(data => {
        this.produtos = data.content;
        this.totalElements = data.totalElements;
        console.log(this.produtos); // Printar a lista de produtos no console
      }, error => {
        console.log(error);
      });
    } else {
      this.produtos = [];
    }
  }

  onSearch(): void {
    this.page = 0;
    this.router.navigate(['/search-produtos'], { queryParams: { termo: this.termo, page: this.page } });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.router.navigate(['/search-produtos'], { queryParams: { termo: this.termo, page: this.page } });
  }

  updateProduto(id: number): void {
    this.router.navigate(['update-produtos', id]);
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este Produto?')) {
      this.deleteProduto(id);
    }
  }

  deleteProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(data => {
      console.log(data);
      this.searchProdutos();
    });
  }
}
