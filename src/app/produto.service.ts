import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL = 'http://localhost:8080/api/v1/produtos';
  constructor(private httpClient: HttpClient) { }

  getProdutoList(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>('${this.baseURL}');
  }
}
