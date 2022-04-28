import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { SuperheroesModule } from './superheroes/superheroes.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, SuperheroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
