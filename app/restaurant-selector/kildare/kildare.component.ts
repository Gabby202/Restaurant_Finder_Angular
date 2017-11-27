import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId: module.id,
    selector: 'kildare-resturaunts',
    templateUrl: 'kildare.component.html',
    styleUrls:  ['kildare.component.css']

})
export default class KildareComponent implements OnInit{

  restaurants: Array<Restaurant> = [];
  tempRestaurants: Array<Restaurant> = [];

  constructor() {
      let restaurantService = new RestaurantService();
      this.restaurants = restaurantService.getRestaurants();

  }

  ngOnInit() {
    for(var i = 0; i < this.restaurants.length; i++) {
      if(this.restaurants[i].county == "Kildare") {
        this.tempRestaurants.push(this.restaurants[i]);
      }
    }
  }

  filter(filterValue: string): void {
    console.log(filterValue);
    this.tempRestaurants.length = 0;
    for(var i = 0; i<this.restaurants.length; i++){
      if(this.restaurants[i].city == filterValue){
          this.tempRestaurants.push(this.restaurants[i]);
      }
    }
  }
}
