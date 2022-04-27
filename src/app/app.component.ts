import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;
  updateCounter(n: number) {
    this.counter += n;
  }
}
