import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass'],
})
export class HeroeComponent {
  // propertys
  name: string = 'Iroman';
  age: number = 40;

  // getter the class
  get nameCapitalized():string{
    return this.name.toUpperCase()
  }

  //methods
  getName(): string {
    const nameAndAge = `${this.name} - ${this.age}`;
    return nameAndAge;
  }

  changeName():void{
    this.name = 'SpiderMan'
  }

  changeAge():void{
    this.age = 36
  }
}
