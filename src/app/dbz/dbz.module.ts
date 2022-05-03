import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './character-list/character-list.component';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, CharacterListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
