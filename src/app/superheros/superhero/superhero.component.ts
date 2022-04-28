import { Component } from '@angular/core';

@Component({
  selector: 'app-superhero',
  templateUrl: 'superhero.component.html',
})
export class SuperheroComponent {
  public name: string = 'Ironman';
  public age: number = 40;
  get getNameCapitalized(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
  getName(): string {
    return `${this.name} - ${this.age}`;
  }
  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 30;
  }
}
