import { Injectable } from '@angular/core';
import { Estoque } from './estoque';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

   private baseUrl = 'http://localhost:8080/api/v1/estoque/estoques';

  constructor(private http: HttpClient) { }

  getEstoqueListPage(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(`${this.baseUrl}`, { params });
  }

  getEstoqueById(id: number): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.baseUrl}/${id}`);
  }

  createEstoque(estoque: Estoque): Observable<Object> {
    console.log('Chamando API para criar um novo estoque');
    return this.http.post(`${this.baseUrl}`, estoque);
  }

  updateEstoque(id: number, estoque: Estoque): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, estoque);
  }

  deleteEstoque(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
