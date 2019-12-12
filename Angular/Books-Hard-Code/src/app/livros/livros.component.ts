import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../service/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  // Variavel Geral para todos os Livros
  generoLivro = [];


  // Variaveis de Gêneros e Sub-Gêneros
  generoAutoajuda = [];
  generoAventura = [];
  generoBiografia = [];
  generoComedia = [];
  generoCronica = [];
  generoDidatico = [];
  generoDrama = [];
  generoFantasia = [];
  generoFiccao = [];
  generoQuadrinhos = [];
  generoReligiao = [];
  generoRomance = [];
  generoSatira = [];
  generoSobrenatural = [];
  generoTerror = [];



  constructor(private categoriasService: LivrosService) { }

  ngOnInit() {
    // Chamar todos os Livros adcionando na Variavel GeneroLivro do tipo Array
    this.categoriasService.listarLivros().subscribe(categoria => this.generoLivro = categoria );
    console.log(this.generoLivro);


    
    // Chamar os Generos e adcionar em variaveis
    // generoAutoajuda;
    this.categoriasService.generoAutoajuda().subscribe(item1 => this.generoAutoajuda = item1);

    // generoAventura
    this.categoriasService.generoAventura().subscribe(item2 => this.generoAventura = item2);

    // generoBiografia 
    this.categoriasService.generoBiografia().subscribe(item3 => this.generoBiografia = item3);

    // generoComedia
    this.categoriasService.generoComedia().subscribe(item4 => this.generoComedia = item4);

    // generoCronica
    this.categoriasService.generoCronica().subscribe(item5 => this.generoCronica = item5);

    // generoDidatico
    this.categoriasService.generoDidatico().subscribe(item6 => this.generoDidatico = item6);

    // generoDrama
    this.categoriasService.generoDrama().subscribe(item7 => this.generoDrama = item7);

    // generoFantasia
    this.categoriasService.generoFantasia().subscribe(item8 => this.generoFantasia = item8);

    // generoFiccao 
    this.categoriasService.generoFiccao().subscribe(item9 => this.generoFiccao = item9);

    // generoQuadrinhos
    this.categoriasService.generoQuadrinhosHQ().subscribe(item10 => this.generoQuadrinhos = item10);

    // generoReligiao 
    this.categoriasService.generoReligiao().subscribe(item11 => this.generoReligiao = item11);

    // generoRomance
    this.categoriasService.generoRomance().subscribe(item12 => this.generoRomance = item12);

    // generoSatira 
    this.categoriasService.generoSatira().subscribe(item13 => this.generoSatira = item13);

    // generoSobrenatural
    this.categoriasService.generoSobrenatural().subscribe(item14 => this.generoSobrenatural = item14);

    // generoTerror
    this.categoriasService.generoTerror().subscribe(item15 => this.generoTerror = item15);


  }

}
