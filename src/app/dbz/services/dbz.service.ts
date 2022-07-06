import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Krilin',
      power: 700,
    },
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
  ];

  // getter
  get characters(): Character[] {
    return [...this._characters];
  }

  constructor() {}

  // methods
  addCharacter(data: Character) {
    this._characters.push(data);
  }
}
