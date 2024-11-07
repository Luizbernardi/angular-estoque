import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduto(){
    if (!this.produto.nome || !this.produto.descricao || this.produto.preco == null) {
      alert('Todos os campos são obrigatórios.');
      return;
    }
    if (this.produto?.preco !== undefined && (this.produto.preco < 0.01 || this.produto.preco > 1000000)) {
      alert('O preço deve estar entre R$ 0,01 e R$ 1.000.000,00.');
      return;
    }
    this.produtoService.createProduto(this.produto).subscribe(data => {
      console.log(data);
      this.goToProdutoList();
    },
    error => console.log(error));
  }

  goToProdutoList(){
    this.router.navigate(['/produtos-list']);
  }

  onSubmit(){
    console.log(this.produto);
    this.saveProduto();
  }

}
