import { EstoqueService } from './../estoque.service';
import { ProdutoEstoqueService } from './../produto-estoque.service';
import { EstoqueProduto } from './../estoque-produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-estoque-produto',
  templateUrl: './cadastro-estoque-produto.component.html',
  styleUrls: ['./cadastro-estoque-produto.component.css']
})
export class CadastroEstoqueProdutoComponent implements OnInit {

  estoques: any[] = [];
  produtos: any[] = [];
  estoqueProduto: any = {
    estoqueId: null,
    produtoId: null,
    quantidade: null
  };
  page: number = 1;
  itemsPerPage: number = 10;
  totalElements: number = 0;

  constructor(
    private produtoEstoqueService: ProdutoEstoqueService,
    private router: Router,
    private estoqueService: EstoqueService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.loadEstoques();
    this.loadProdutos();
  }

  loadEstoques(): void {
    this.estoqueService.getEstoqueListPage(this.page - 1, this.itemsPerPage).subscribe((data: any) => {
      this.estoques = data.content;
      this.totalElements = data.totalElements;
    });
  }

  loadProdutos(): void {
    this.produtoService.getProdutoListPage(this.page - 1, this.itemsPerPage).subscribe((data: any) => {
      this.produtos = data.content;
      this.totalElements = data.totalElements;
    });
  }

  saveEstoqueProduto(): void {
    if (this.estoqueProduto.quantidade < 1 || this.estoqueProduto.quantidade > 100) {
      alert('A quantidade deve estar entre 1 e 100.');
      return;
    }
    this.produtoEstoqueService.createEstoqueProduto(this.estoqueProduto).subscribe(data => {
      console.log(data);
      this.goToEstoqueProdutoList();
    },
    (error: any) => console.log(error));
  }

  goToEstoqueProdutoList(): void {
    this.router.navigate(['/produtos-estoque-list']);
  }

  onSubmit(): void {
    this.saveEstoqueProduto();
  }

  onPageChange(event: any): void {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage;
    this.loadEstoques();
    this.loadProdutos();
  }
}
