import { Component, Input } from '@angular/core';
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
  @Input() characterList: Character[] = [];
  addCharacter(e: any) {
    // Basic Validation
    if (this.newCharacter.name.trim().length === 0) return;
    this.characterList.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
    console.log(this.characterList);
  }
}
