import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    // send new character
    // this.onNewCharacter.emit(this.newCharacter)
    // using the service DbzService
    this.dbzService.addCharacter(this.newCharacter)
    // reset object character
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
