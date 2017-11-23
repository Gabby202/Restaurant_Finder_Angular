import {Component} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId: module.id,
    selector: 'kildare-resturaunts',
    templateUrl: 'kildare.component.html',
    styleUrls:  ['kildare.component.css']

})
export default class KildareComponent {

  restaurants: Array<Restaurant> = [];

  constructor() {
      let restaurantService = new RestaurantService();
      this.restaurants = restaurantService.getRestaurants();
  }
}
