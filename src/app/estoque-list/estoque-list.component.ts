import { Page } from './../../../node_modules/ngx-pagination/lib/pagination-controls.directive.d';
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
  page: number = 1;
  itemsPerPage: number = 9;


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

  deleteEstoque(id: number){
    this.estoqueService.deleteEstoque(id).subscribe(data => {
      console.log(data);
      this.getEstoques();
    })
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este estoque?')) {
      this.deleteEstoque(id);
    }
  }



}

