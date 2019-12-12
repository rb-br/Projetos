import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  // Todos os Livros do Site
  private readonly API = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/livros-up-down.json";
  

  // Lista de Gêneros e Sub-Gêneros
  private readonly item1 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-autoajuda-list.json";
  private readonly item2 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-aventura-list.json";
  private readonly item3 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-biografia-list.json";
  private readonly item4 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-comedia-list.json";
  private readonly item5 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-cronica-list.json";
  private readonly item6 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-didatico-list.json";
  private readonly item7 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-drama-list.json";
  private readonly item8 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-fantasia-list.json";
  private readonly item9 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-ficcao-cientifica-list.json";
  private readonly item10 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-quadrinhos-hq-list.json";
  private readonly item11 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-religiao-list.json";
  private readonly item12 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-romance-list.json";
  private readonly item13 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-satira-list.json";
  private readonly item14 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-sobrenatural-list.json";
  private readonly item15 = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/diversos/list-generos-books/genero-terror-list.json";
  

  constructor(private http: HttpClient) {   }

// Chamando todos os Livros pelo metodo HTTP
  listarLivros(): Observable<any> {
    return this.http.get<any[]>(this.API);
  }


  // Chamando os varios generos pelo metodo HTTP
  generoAutoajuda(): Observable<any> {
    return this.http.get<any[]>(this.item1);
  }
  generoAventura(): Observable<any> {
    return this.http.get<any[]>(this.item2);
  }
  generoBiografia(): Observable<any> {
    return this.http.get<any[]>(this.item3);
  }
  generoComedia(): Observable<any> {
    return this.http.get<any[]>(this.item4);
  }
  generoCronica(): Observable<any> {
    return this.http.get<any[]>(this.item5);
  }
  generoDidatico(): Observable<any> {
    return this.http.get<any[]>(this.item6);
  }
  generoDrama(): Observable<any> {
    return this.http.get<any[]>(this.item7);
  }
  generoFantasia(): Observable<any> {
    return this.http.get<any[]>(this.item8);
  }
  generoFiccao(): Observable<any> {
    return this.http.get<any[]>(this.item9);
  }
  generoQuadrinhosHQ(): Observable<any> {
    return this.http.get<any[]>(this.item10);
  }
  generoReligiao(): Observable<any> {
    return this.http.get<any[]>(this.item11);
  }
  generoRomance(): Observable<any> {
    return this.http.get<any[]>(this.item12);
  }
  generoSatira(): Observable<any> {
    return this.http.get<any[]>(this.item13);
  }
  generoSobrenatural(): Observable<any> {
    return this.http.get<any[]>(this.item14);
  }
  generoTerror(): Observable<any> {
    return this.http.get<any[]>(this.item15);
  }

}
