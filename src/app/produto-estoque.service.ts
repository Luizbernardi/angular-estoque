import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstoqueProduto } from './estoque-produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEstoqueService {

  private baseUrl = 'http://localhost:8080/api/v1/produto-estoques'; // URL da sua API REST

  constructor(private http: HttpClient) { }

  getProdutoEstoqueList(): Observable<EstoqueProduto[]> {
    console.log('Chamando API para obter lista de ProdutoEstoques');
    return this.http.get<EstoqueProduto[]>(`${this.baseUrl}`);
  }
}
