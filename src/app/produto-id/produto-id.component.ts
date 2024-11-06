import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-id',
  templateUrl: './produto-id.component.html',
  styleUrls: ['./produto-id.component.css']
})
export class ProdutoIdComponent implements OnInit {

  produto: Produto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.getProdutoById();
  }

  getProdutoById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getProdutoById(+id).subscribe(data => {
        this.produto = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/produtos-list']);
  }
}
