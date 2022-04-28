import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { SuperheroComponent } from './superheros/superhero/superhero.component';
import { ListComponent } from './superheros/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SuperheroComponent,
    ListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
