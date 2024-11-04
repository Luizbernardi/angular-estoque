import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { IndexComponent } from './index/index.component';
import { EstoqueListComponent } from './estoque-list/estoque-list.component';
import { ProdutoEstoqueListComponent } from './produto-estoque-list/produto-estoque-list.component';

const routes: Routes = [
  {path: 'produtos-list' , component: ProdutoListComponent},
  {path: 'home', component: IndexComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'estoques-list', component: EstoqueListComponent},
  {path: 'produtos-estoque-list', component: ProdutoEstoqueListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
