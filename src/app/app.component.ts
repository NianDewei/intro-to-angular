import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.sass'],
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.sass']

})

export class AppComponent {
  // propertys
  // title: string = 'Counter App';
  // number: number = 5;
  // base: number = 5;

// methods the component
  accumulator(value: number): void {
    // this.number += value;
    // if number is greater than base, reset to base
    // if (this.number >= this.base) this.number += value;
    // else this.number = this.base;
  }

  //recomendation: seperate the logic in two methods
}
