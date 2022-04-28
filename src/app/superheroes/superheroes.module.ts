import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { SuperheroComponent } from './superhero/superhero.component';

@NgModule({
  declarations: [ListComponent, SuperheroComponent],
  exports: [ListComponent],
  imports: [CommonModule],
})
export class SuperheroesModule {}
