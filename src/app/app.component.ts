import { Component, Output } from '@angular/core';
import { Card } from './models';
import { PlayerComponent } from './components/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'day31-workshop';
  playerHand1: Card[] = []
  playerHand2: Card[] = []
  playerHand3: Card[] = []
  playerHand4: Card[] = []

  player:string | undefined


  newCard(card : Card | undefined){

    switch(this.player){
      case 'Fred':
        // @ts-ignore
        this.playerHand1.push(card)
        break;
      case 'Barney':
        // @ts-ignore
        this.playerHand2.push(card)
        break;

      case 'Wilma':
        // @ts-ignore
        this.playerHand3.push(card)
        break;
      case 'Betty':
        // @ts-ignore
        this.playerHand4.push(card)
        break;  
    }
    
  }

  playerSelected(name:string){
    this.player = name
    console.log('>>> player selected: ', this.player)
  }

}
