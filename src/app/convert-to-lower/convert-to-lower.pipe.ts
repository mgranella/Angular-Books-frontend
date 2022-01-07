import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToLower'
})
export class ConvertToLowerPipe implements PipeTransform {

  transform(value: string): string {
    const remove1stLetter:string = value.substring(1).toLowerCase();
    const firstLetter = value.substring(0,1).toUpperCase();
    return `${firstLetter}${remove1stLetter}`;
  }

}
