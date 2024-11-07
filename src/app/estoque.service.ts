import { Injectable } from '@angular/core';
import { Estoque } from './estoque';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

   private baseUrl = 'http://localhost:8080/api/v1/estoques';

  constructor(private http: HttpClient) { }

  getEstoqueList(): Observable<Estoque[]> {
    console.log('Chamando API para obter lista de Estoques');
    return this.http.get<Estoque[]>(`${this.baseUrl}`);
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
