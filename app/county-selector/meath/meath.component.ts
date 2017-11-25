import {Component} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
  moduleId: module.id,
   selector: 'meath-resturaunts',
   templateUrl: 'meath.component.html',
   styleUrls:  ['meath.component.css']
})
export default class MeathComponent{

  restaurants: Array<Restaurant> = [];

  constructor() {
      let restaurantService = new RestaurantService();
      this.restaurants = restaurantService.getRestaurants();
  }
}
