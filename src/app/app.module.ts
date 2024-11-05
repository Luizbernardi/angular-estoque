import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { EstoqueListComponent } from './estoque-list/estoque-list.component';
import { ProdutoEstoqueListComponent } from './produto-estoque-list/produto-estoque-list.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { CadastroEstoqueProdutoComponent } from './cadastro-estoque-produto/cadastro-estoque-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    NavbarComponent,
    IndexComponent,
    EstoqueListComponent,
    ProdutoEstoqueListComponent,
    CadastroProdutoComponent,
    CadastroEstoqueComponent,
    CadastroEstoqueProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
