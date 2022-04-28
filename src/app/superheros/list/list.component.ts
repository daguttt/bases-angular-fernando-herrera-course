import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public superheroList: string[] = [
    'Spidermar',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  removeSuperheroFromList(): void {
    const temporalSuperheroList = [...this.superheroList];
    temporalSuperheroList.pop();
    this.superheroList = temporalSuperheroList;
  }
}
