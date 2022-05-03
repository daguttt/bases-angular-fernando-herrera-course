import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  addCharacter(e: any) {
    // Basic Validation
    if (this.newCharacter.name.trim().length === 0) return;
    // Emit character to Parent Component
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
