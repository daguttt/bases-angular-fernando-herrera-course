import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  @Input() characterList: Character[] = [];
}
