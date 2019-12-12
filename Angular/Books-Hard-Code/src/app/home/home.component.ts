import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../service/livros.service';
import { Livro } from '../service/livro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livros: Livro[];
  mostrar: boolean = true;

  constructor(private services: LivrosService) { }

  ngOnInit() {
    this.services.listarLivros().subscribe(dados => this.livros = dados);
    console.log(this.livros);
  }

  exibir(){
    
    this.mostrar = !this.mostrar;
  }

}
