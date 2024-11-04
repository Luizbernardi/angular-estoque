import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.produtos = [
      {
        id: 1,
        nome: "Produto 1",
        descricao: "Descrição do Produto 1",
        preco: 100.00,
        estoqueProdutos: [],
        dataEntrada: new Date()
      },
      {
        id: 2,
        nome: "Produto 2",
        descricao: "Descrição do Produto 2",
        preco: 200.00,
        estoqueProdutos: [],
        dataEntrada: new Date()
      }
    ];

  }

}
