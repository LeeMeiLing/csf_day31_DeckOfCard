import { Component } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'day31-workshop';
  playerHand: Card[] = []
  
  newCard(card : Card | undefined){

    // @ts-ignore
    this.playerHand.push(card)
  }

}
