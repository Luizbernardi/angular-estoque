import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstoqueProduto } from './estoque-produto';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEstoqueService {

  private baseUrl = 'http://localhost:8080/api/v1/estoque-produto/estoque-produtos'; // URL da sua API REST

  constructor(private http: HttpClient) { }



  createEstoqueProduto(estoqueProduto: EstoqueProduto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, estoqueProduto);
  }

  getProdutoEstoqueListPage(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.baseUrl}`, { params });
  }

  getAllProdutoEstoque(): Observable<EstoqueProduto[]> {
    return this.http.get<EstoqueProduto[]>(`${this.baseUrl}/all`);
  }




  getEstoqueProdutoById(id: number): Observable<EstoqueProduto> {
    return this.http.get<EstoqueProduto>(`${this.baseUrl}/${id}`);
  }

  updateEstoqueProduto(id: number, estoqueProduto: EstoqueProduto): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, estoqueProduto);
  }

  deleteEstoqueProduto(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
