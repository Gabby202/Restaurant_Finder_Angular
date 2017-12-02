import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'quisine',
    templateUrl: 'quisine.component.html',
    styleUrls:  ['quisine.component.css']

})
export default class QuisineComponent {

    restaurants: Array<Restaurant> = [];
    tempRestaurants: Array<Restaurant> = [];

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
    }

    filter(value: string, id:number): void {
    if (id == 2) {
       this.tempRestaurants.length = 0;
       console.log(value);
       for(var i = 0; i<this.restaurants.length; i++){
         if(this.restaurants[i].category == value) {
           console.log("Added: " +this.restaurants[i].name);
             this.tempRestaurants.push(this.restaurants[i]);

         }
       }
       //remove items that arent part of filters
       for(var k = this.tempRestaurants.length-1; k>=0; k--){
         console.log("index: " + k);
         if(this.tempRestaurants[k].category != value) {
             console.log("Spliced: " +this.tempRestaurants[k].name);
             this.tempRestaurants.splice(k, 1);
         }
       }
    }
  }
}
