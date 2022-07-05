import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  heroes: string[] = ['SpiderMan', 'Iroman', 'BatMan', 'SuperMan'];
  oldHeroe: string = '';

  constructor() {}

  ngOnInit(): void {}

  deleteHeroe():void {
    this.oldHeroe = this.heroes.shift() || '';
  }
}
