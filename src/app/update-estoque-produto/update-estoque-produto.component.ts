import { ProdutoEstoqueService } from './../produto-estoque.service';
import { Component, OnInit } from '@angular/core';
import { EstoqueProduto } from '../estoque-produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-estoque-produto',
  templateUrl: './update-estoque-produto.component.html',
  styleUrl: './update-estoque-produto.component.css'
})
export class UpdateEstoqueProdutoComponent implements OnInit{

  id: number | undefined;
  estoqueProduto: EstoqueProduto = new EstoqueProduto();

  constructor(private produtoEstoqueService: ProdutoEstoqueService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

  this.produtoEstoqueService.getEstoqueProdutoById(this.id!).subscribe(
    data => { this.estoqueProduto = data; },
    error => console.log(error));
  }

  onSubmit() {
    this.produtoEstoqueService.updateEstoqueProduto(this.id!, this.estoqueProduto).subscribe(data => {
      this.goToEstoqueProdutoList();
    }, error => console.log(error));
  }

  goToEstoqueProdutoList() {
    this.router.navigate(['/produtos-estoque-list']);
  }

  }


