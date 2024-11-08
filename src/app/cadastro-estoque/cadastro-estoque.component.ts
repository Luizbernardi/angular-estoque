import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { Estoque } from '../estoque';
import { Router } from '@angular/router';
import { AuthService } from './../auth-service.service';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: Estoque = new Estoque();
  message: string = '';

  constructor(private estoqueService: EstoqueService, private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.setRedirectUrl(this.router.url);
      this.router.navigate(['/login']);
    }
  }

  saveEstoque(): void {
    this.estoqueService.createEstoque(this.estoque).subscribe(data => {
      console.log(data);
      this.message = 'Estoque cadastrado com sucesso!';
      this.goToEstoqueList();
    },
    error => {
      console.log(error);
      this.message = 'Erro ao cadastrar estoque.';
    });
  }

  goToEstoqueList(): void {
    this.router.navigate(['/estoques-list']);
  }

  onSubmit(): void {
    if (!this.estoque.nome) {
      alert('O nome do estoque é obrigatório.');
      return;
    }
    console.log(this.estoque);
    this.saveEstoque();
  }
}
