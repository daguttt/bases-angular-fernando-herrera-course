import { Component } from '@angular/core';

interface CounterMethods {
  [key: string]: (counter: number, base: number) => number;
}

const CounterMethods: CounterMethods = {
  sumar: (counter: number, base: number): number => counter + base,
  restar: (counter: number, base: number): number => counter - base,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;
  updateCounter(method: string) {
    this.counter = CounterMethods[method](this.counter, this.base);
  }
}
