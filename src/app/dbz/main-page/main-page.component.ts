import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];
  public newCharacter: Character = {
    name: '',
    power: 0,
  };
  addNewCharacter(character: Character) {
    this.characterList.push(character);
  }
  constructor(private dbzService: DbzService) {}
}
