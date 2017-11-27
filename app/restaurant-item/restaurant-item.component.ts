import {Component, Input} from '@angular/core';
import {Restaurant} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-item',
    templateUrl: 'restaurant-item.component.html',
    styleUrls:  ['restaurant-item.component.css']
})
export default class RestaurantItemComponent {
    @Input() restaurant: Restaurant;
}
