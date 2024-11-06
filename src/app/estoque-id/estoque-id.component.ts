import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from '../estoque.service';
import { Estoque } from '../estoque';

@Component({
  selector: 'app-estoque-id',
  templateUrl: './estoque-id.component.html',
  styleUrls: ['./estoque-id.component.css']
})
export class EstoqueIdComponent implements OnInit {

  estoque: Estoque | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.getEstoqueById();
  }

  getEstoqueById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.estoqueService.getEstoqueById(+id).subscribe(data => {
        this.estoque = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/estoques-list']);
  }
}
