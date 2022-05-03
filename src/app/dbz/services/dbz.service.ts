import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characterList: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];
  get characterList(): Character[] {
    return [...this._characterList];
  }

  constructor() {}

  addNewCharacter(character: Character) {
    this._characterList.push(character);
  }
}
