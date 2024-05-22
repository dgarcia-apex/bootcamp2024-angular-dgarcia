import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CapitalizePipe'
})
export class CapitalizePipe implements PipeTransform {

  transform(val: string): string {
    return val.split(" ").map(w => this.capitalizeText(w)).join(" ");
  }

  capitalizeText(word:string) 
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}
