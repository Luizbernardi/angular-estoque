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
  page: number = 1;
  itemsPerPage: number = 10;

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
}
