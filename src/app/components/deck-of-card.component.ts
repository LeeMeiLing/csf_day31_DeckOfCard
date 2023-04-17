import { Component, Output } from '@angular/core';
import { Card, DeckOfCards } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-deck-of-card',
  templateUrl: './deck-of-card.component.html',
  styleUrls: ['./deck-of-card.component.css']
})
export class DeckOfCardComponent {

  cards: DeckOfCards

  @Output()
  onCardSelection = new Subject<Card | undefined>

  constructor(){
    this.cards = new DeckOfCards
    this.cards.shuffle()
  }

  take(){
    const c = this.cards.take()
    console.info('>>> taken: ',c)
    this.onCardSelection.next(c)
  }

}
