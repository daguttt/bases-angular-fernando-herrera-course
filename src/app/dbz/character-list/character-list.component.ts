import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  @Input() characterList: Character[] = [];
  constructor(private dbzService: DbzService) {}
}
