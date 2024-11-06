import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { IndexComponent } from './index/index.component';
import { EstoqueListComponent } from './estoque-list/estoque-list.component';
import { ProdutoEstoqueListComponent } from './produto-estoque-list/produto-estoque-list.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroEstoqueProdutoComponent } from './cadastro-estoque-produto/cadastro-estoque-produto.component';
import { EstoqueIdComponent } from './estoque-id/estoque-id.component';
import { ProdutoIdComponent } from './produto-id/produto-id.component';

const routes: Routes = [
  {path: 'produtos-list' , component: ProdutoListComponent},
  {path: 'home', component: IndexComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'estoques-list', component: EstoqueListComponent},
  {path: 'produtos-estoque-list', component: ProdutoEstoqueListComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'cadastro-estoque', component: CadastroEstoqueComponent},
  {path: 'cadastro-estoque-produto', component: CadastroEstoqueProdutoComponent},
  {path: 'estoques/:id', component: EstoqueIdComponent },
  {path: 'produtos/:id', component: ProdutoIdComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
