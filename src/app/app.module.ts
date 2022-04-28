import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { SuperheroComponent } from './superheros/superhero/superhero.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, SuperheroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
