import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstoqueService } from '../estoque.service';
import { ProdutoService } from '../produto.service';
import { ProdutoEstoqueService } from '../produto-estoque.service';
import { EstoqueProduto } from '../estoque-produto';
import { Produto } from '../produto';
import { Estoque } from '../estoque';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from './../auth-service.service';

@Component({
  selector: 'app-cadastro-estoque-produto',
  templateUrl: './cadastro-estoque-produto.component.html',
  styleUrls: ['./cadastro-estoque-produto.component.css']
})
export class CadastroEstoqueProdutoComponent implements OnInit {

  estoques: Estoque[] = [];
  produtos: Produto[] = [];
  estoqueProduto: EstoqueProduto = new EstoqueProduto();
  private searchEstoqueTerms = new Subject<string>();
  private searchProdutoTerms = new Subject<string>();

  constructor(
    private produtoEstoqueService: ProdutoEstoqueService,
    private router: Router,
    private estoqueService: EstoqueService,
    private produtoService: ProdutoService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {


    if (!this.authService.isLoggedIn()) {
        this.authService.setRedirectUrl(this.router.url);
        this.router.navigate(['/login']);
      }

    this.searchEstoqueTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.estoqueService.searchEstoques(term))
    ).subscribe(data => {
      this.estoques = this.filterUniqueByName(data);
    });

    this.searchProdutoTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.produtoService.searchProdutos(term))
    ).subscribe(data => {
      this.produtos = this.filterUniqueByName(data);
    });
  }

  searchEstoque(term: string): void {
    this.searchEstoqueTerms.next(term);
  }

  searchProduto(term: string): void {
    this.searchProdutoTerms.next(term);
  }

  filterUniqueByName(items: any[]): any[] {
    const uniqueItems = items.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.nome === item.nome
      ))
    );
    return uniqueItems;
  }

  saveEstoqueProduto(): void {
    if (this.estoqueProduto.quantidade === undefined || this.estoqueProduto.quantidade < 1 || this.estoqueProduto.quantidade > 100) {
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

  onEstoqueInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchEstoque(input.value);
  }

  onProdutoInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchProduto(input.value);
  }
}
