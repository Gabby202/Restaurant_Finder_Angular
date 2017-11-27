// Implement ScoreComponent here.
import {Restaurant} from '../restaurant-service/restaurant-service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId:     module.id,
    selector:    'score',
    templateUrl: 'score.component.html'
})
export default class ScoreComponent implements OnInit{
  @Input() score: number;
  starsEmpty: boolean[] = [];
  ngOnInit() {
    if(this.score > 3) {
      this.starsEmpty.push(false, false, false, true, true);
    }
  }


}
