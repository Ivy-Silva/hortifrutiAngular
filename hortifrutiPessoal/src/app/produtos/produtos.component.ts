import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produto[]

  produto: Produto = new Produto()
  id:number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.findTodosOsProdutos()
  }

  findTodosOsProdutos(){
    this.produtoService.getTodosOsProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos=resp
    })
  }

}
