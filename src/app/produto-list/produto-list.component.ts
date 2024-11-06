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

  constructor(private produtoService: ProdutoService,
   private router: Router
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos() {
    this.produtoService.getProdutoList().subscribe(data => {
      this.produtos = data;
    });
  }

  updateProduto(id: number){
    this.router.navigate(['update-produtos', id]);
  }

}
