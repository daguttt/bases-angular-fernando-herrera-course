import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
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
    console.log(this.newCharacter);
  }
}
