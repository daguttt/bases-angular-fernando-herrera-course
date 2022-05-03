import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
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
  /**
   * * **********************************
   // ! Not neccesary because of [(ngModel)]
  */
  // updateNewCharacterName(e: any) {
  //   this.newCharacter.name = e.target.value;
  // }
  addCharacter(e: any) {
    // Basic Validation
    if (this.newCharacter.name.trim().length === 0) return;
    this.characterList.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
