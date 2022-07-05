import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent{
   // propertys
   title: string = 'Counter App';
   number: number = 5;
   base: number = 5;

 // methods the component
   accumulator(value: number): void {
     // this.number += value;
     // if number is greater than base, reset to base
     if (this.number >= this.base) this.number += value;
     else this.number = this.base;
   }

   //recomendation: seperate the logic in two methods
}
