import { LOCALE_ID, NgModule } from '@angular/core';
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
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { EstoqueIdComponent } from './estoque-id/estoque-id.component';
import { ProdutoIdComponent } from './produto-id/produto-id.component';
import { UpdateEstoqueComponent } from './update-estoque/update-estoque.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';
import { UpdateEstoqueProdutoComponent } from './update-estoque-produto/update-estoque-produto.component';
import { SearchProdutoComponent } from './search-produto/search-produto.component';

registerLocaleData(localePt, 'pt-BR');

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
    CadastroEstoqueProdutoComponent,
    FooterComponent,
    EstoqueIdComponent,
    ProdutoIdComponent,
    UpdateEstoqueComponent,
    UpdateProdutoComponent,
    UpdateEstoqueProdutoComponent,
    SearchProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskPipe,
    NgxMaskDirective,
    NgxPaginationModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'
   }, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
