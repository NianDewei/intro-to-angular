import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  newCharacter: Character = {
    name: 'Maestro Roshi',
    power: 1000,
  };

  constructor() {}

  ngOnInit(): void {}
}
