import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mostrar: boolean = true;
  mostrar2: boolean = true;
  mostrar3: boolean = true;
  mostrar4: boolean = true;

  constructor() { }

  ngOnInit() {
  }


  mostrarTexto(){
    this.mostrar = !this.mostrar;
  }
  mostrarTexto2(){
    this.mostrar2 = !this.mostrar2;
  }
  mostrarTexto3(){
    this.mostrar3 = !this.mostrar3;
  }
  mostrarTexto4(){
    this.mostrar4 = !this.mostrar4;
  }



}
