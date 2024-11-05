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
    this.estoqueService.getEstoqueList().subscribe(data => {
      this.estoques = data;
    });
  }

  loadProdutos(): void {
    this.produtoService.getProdutoList().subscribe(data => {
      this.produtos = data;
    });
  }

  saveEstoqueProduto(): void {
    console.log(this.estoqueProduto);
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
    console.log(this.estoqueProduto);
    this.saveEstoqueProduto();
  }
}
