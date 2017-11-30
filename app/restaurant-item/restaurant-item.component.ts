import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant-service/restaurant-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-item',
    templateUrl: 'restaurant-item.component.html',
    styleUrls:  ['restaurant-item.component.css']
})


export default class RestaurantItemComponent implements OnInit{

    @Input() restaurant: Restaurant;
    public imgUrl: string;

    ngOnInit() {
      this.imgUrl= 'app/images/' + this.restaurant.id + '.jpg';
    }

}
