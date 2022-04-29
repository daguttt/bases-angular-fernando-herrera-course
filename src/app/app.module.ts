import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { SuperheroesModule } from './superheroes/superheroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuperheroesModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
