import { Estoque } from './../estoque';
import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-estoque',
  templateUrl: './update-estoque.component.html',
  styleUrl: './update-estoque.component.css'
})
export class UpdateEstoqueComponent implements OnInit {

  id: number | undefined;
  estoque: Estoque = new Estoque();
  constructor(private estoqueService: EstoqueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.estoqueService.getEstoqueById(this.id!).subscribe(data => {
      this.estoque = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.estoqueService.updateEstoque(this.id!, this.estoque).subscribe(data => {
      this.goToEstoqueList();
    }, error => console.log(error));
  }

  goToEstoqueList() {
    this.router.navigate(['/estoques-list']);
  }

}
