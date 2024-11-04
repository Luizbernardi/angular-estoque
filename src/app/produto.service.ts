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
}