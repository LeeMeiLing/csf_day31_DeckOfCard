import { Component, Input } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input()
  name: string | undefined

  @Input()
  hand:Card[]=[]


}
