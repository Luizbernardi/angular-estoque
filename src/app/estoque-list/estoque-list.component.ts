import { EstoqueService } from './../estoque.service';
import { Estoque } from './../estoque';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.component.html',
  styleUrls: ['./estoque-list.component.css']
})
export class EstoqueListComponent implements OnInit {

  estoques: Estoque[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalElements: number = 0;

  constructor(private estoqueService: EstoqueService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEstoques();
  }

  private getEstoques(): void {
    this.estoqueService.getEstoqueListPage(this.page - 1, this.itemsPerPage).subscribe(data => {
      this.estoques = data.content;
      this.totalElements = data.totalElements;
    });
  }

  updateEstoque(id: number): void {
    this.router.navigate(['update-estoques', id]);
  }

  deleteEstoque(id: number): void {
    this.estoqueService.deleteEstoque(id).subscribe(data => {
      console.log(data);
      this.getEstoques();
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Tem certeza que deseja excluir este estoque?')) {
      this.deleteEstoque(id);
    }
  }

  onPageChange(event: any): void {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage;
    this.getEstoques();
  }
}
