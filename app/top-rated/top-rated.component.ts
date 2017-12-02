import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'top-rated',
    templateUrl: 'top-rated.component.html',
    styleUrls:  ['top-rated.component.css']

})
export default class TopRatedComponent {

  restaurants: Array<Restaurant> = [];
  tempRestaurants: Array<Restaurant> = [];

  constructor() {
      let restaurantService = new RestaurantService();
      this.restaurants = restaurantService.getRestaurants();
  }

}
