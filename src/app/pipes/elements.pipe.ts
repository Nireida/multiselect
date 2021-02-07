import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elements'
})
export class ElementsPipe implements PipeTransform {

  transform(value: number): string {
    const str = value.toString();
    if (str.length > 1) {
      const lastNumbers = +str.slice(-2);
      if (lastNumbers > 10 && value < 20) {
        return value + ' элементов'
      }
    }
    const lastNumber = str.slice(-1);
    switch (lastNumber) {
      case '0': return value + ' элементов';
      case '1': return value + ' элемент';
      case '2': return value + ' элемента';
      case '3': return value + ' элемента';
      case '4': return value + ' элемента';
      case '5': return value + ' элементов';
      case '6': return value + ' элементов';
      case '7': return value + ' элементов';
      case '8': return value + ' элементов';
      case '9': return value + ' элементов';
    }
  }

}
