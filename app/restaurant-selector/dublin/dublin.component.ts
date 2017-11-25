import {Component} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
   moduleId: module.id,
    selector: 'dublin-resturaunts',
    templateUrl: 'dublin.component.html',
    styleUrls:  ['dublin.component.css']
})
export default class DublinComponent {

    restaurants: Array<Restaurant> = [];
    tempRestaurants: Array<Restaurant> = [];

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();

    }

    gaboobie(filterValue: string): void {
      console.log(filterValue);
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].city == this.filterValue){
          this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

}
