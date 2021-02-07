import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyName'
})
export class KeyNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(',')[1];
  }

}
