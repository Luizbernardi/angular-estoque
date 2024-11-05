import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.produto);
  }

}
