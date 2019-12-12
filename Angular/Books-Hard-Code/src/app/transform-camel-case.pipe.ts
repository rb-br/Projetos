import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCamelCase'
})
export class TransformCamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let resultado = '';

    for(let i of values){
      resultado += this.capitalize(i) + ' ';
    }

    return resultado;
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() +
    value.substr(1).toLowerCase();
  }

}
