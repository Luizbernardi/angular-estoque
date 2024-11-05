import { Router } from '@angular/router';
import { EstoqueService } from './../estoque.service';
import { Component, OnInit } from '@angular/core';
import { Estoque } from '../estoque';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrl: './cadastro-estoque.component.css'
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: Estoque = new Estoque();

  constructor(private estoqueService: EstoqueService, private router: Router ) { }

  ngOnInit(): void {
  }

  saveEstoque(){
    this.estoqueService.createEstoque(this.estoque).subscribe(data => {
      console.log(data);
      this.goToEstoqueList();
    },
    error => console.log(error));
  }

  goToEstoqueList(){
    this.router.navigate(['/estoques-list']);
  }

  onSubmit(){
    console.log(this.estoque);
    this.saveEstoque();
  }

}
