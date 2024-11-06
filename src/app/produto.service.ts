import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/api/v1/produtos'; // URL da sua API REST

  constructor(private http: HttpClient) { }

  getProdutoList(): Observable<Produto[]> {
    console.log('Chamando API para obter lista de produtos');
    return this.http.get<Produto[]>(`${this.baseUrl}`);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }

  createProduto(produto: Produto): Observable<Object> {
    console.log('Chamando API para criar um novo produto');
    return this.http.post(`${this.baseUrl}`, produto);
  }

  updateProduto(id: number, produto: Produto): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, produto);
  }

  deleteProduto(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
