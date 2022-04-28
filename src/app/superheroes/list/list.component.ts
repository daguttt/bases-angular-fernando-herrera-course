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
  public removedSuperhero: string = '';

  removeSuperheroFromList(): void {
    const temporalSuperheroList = [...this.superheroList];
    this.removedSuperhero = temporalSuperheroList.pop() ?? '';
    this.superheroList = temporalSuperheroList;
  }
}
