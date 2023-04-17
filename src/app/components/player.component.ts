import { Component, Input, Output } from '@angular/core';
import { Card } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input()
  name: string = "fred"

  @Input()
  hand:Card[]=[]

  @Output()
  selected = new Subject<string>

  selectPlayer(){
    this.selected.next(this.name)
  }

  

}
