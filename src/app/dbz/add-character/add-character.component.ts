import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
  constructor(private dbzService: DbzService) {}
  // ! Now this is not needed because of the Service
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  addCharacter(): void {
    // Basic Validation
    if (this.newCharacter.name.trim().length === 0) return;
    // this.onNewCharacter.emit(this.newCharacter);
    // Add new character to the Service State
    this.dbzService.addNewCharacter(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
