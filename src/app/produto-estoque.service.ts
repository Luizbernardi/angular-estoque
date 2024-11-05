import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstoqueProduto } from './estoque-produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEstoqueService {

  private baseUrl = 'http://localhost:8080/api/v1/estoque-produtos'; // URL da sua API REST

  constructor(private http: HttpClient) { }

  createEstoqueProduto(estoqueProduto: EstoqueProduto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, estoqueProduto);
  }

  getEstoqueProdutoList(): Observable<EstoqueProduto[]> {
    return this.http.get<EstoqueProduto[]>(`${this.baseUrl}`);
  }
}
