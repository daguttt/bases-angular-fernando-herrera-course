import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  get characterList(): Character[] {
    return this.dbzService.characterList;
  }
  constructor(private dbzService: DbzService) {}
}
