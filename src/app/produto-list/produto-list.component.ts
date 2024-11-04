import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private ProdutoService: ProdutoService ) { }

  ngOnInit(): void {
    this.getProdutos();

  }

  private getProdutos(){
    this.ProdutoService.getProdutoList().subscribe(data => {
      this.produtos = data;
    });
  }
}
