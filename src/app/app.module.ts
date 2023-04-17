import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeckOfCardComponent } from './components/deck-of-card.component';
import { PlayerComponent } from './components/player.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
