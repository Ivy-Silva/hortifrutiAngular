import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  //read do CRUD
  //primeiro endpoint = ponto onde eu me conecto com o servidor
  getTodosOsProdutos(){
    return this.http.get('http://31.220.57.121:9080/produtos')
  }


}
