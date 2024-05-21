import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    const elementText:string = this.eleRef.nativeElement.innerText;
    
    this.eleRef.nativeElement.innerText = this.eleRef.nativeElement.innerText.split(" ").map((w: string) => this.capitalizeText(w)).join(" ");
  }
  
  capitalizeText(word:string) 
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
