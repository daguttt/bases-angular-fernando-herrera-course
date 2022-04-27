import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <p>
      La base es <strong>{{ base }}</strong>
    </p>
    <button (click)="updateCounter(-base)">- {{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="updateCounter(base)">+ {{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Contador App';
  public base: number = 5;
  public counter: number = 0;
  updateCounter(n: number) {
    this.counter += n;
  }
}
