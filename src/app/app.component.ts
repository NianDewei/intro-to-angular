import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string = 'Dev Angular';
  number: number = 1;

  // // add +1 to counter
  // add(): void {
  //   this.number++;
  // }

  // // subtract -1 to counter
  // subtract(): void {
  //   if (this.number > 0) this.number--;
  // }

  // acumulator counter
  acumulator(value: number): void {
    if(this.number == 1 && value == -1) this.number = 1;
    else this.number += value;
  }
}
