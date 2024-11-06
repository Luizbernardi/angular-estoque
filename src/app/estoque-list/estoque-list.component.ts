import { EstoqueService } from './../estoque.service';
import { Estoque } from './../estoque';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.component.html',
  styleUrl: './estoque-list.component.css'
})
export class EstoqueListComponent implements OnInit {

  estoques: Estoque[] = [];

  constructor(private estoqueService: EstoqueService,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.getEstoques();
  }

   private getEstoques(): void {
    this.estoqueService.getEstoqueList().subscribe(data => {
      this.estoques = data;
    });
  }

  updateEstoque(id: number){
    this.router.navigate(['update-estoques', id]);
  }



}

