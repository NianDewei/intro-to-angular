import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit {
  // getter
  get characters(): Character[] {
    return this.dbzservice.characters;
  }

  constructor(private dbzservice: DbzService) {}

  ngOnInit(): void {}
}
