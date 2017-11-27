import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
   moduleId: module.id,
    selector: 'dublin-resturaunts',
    templateUrl: 'dublin.component.html',
    styleUrls:  ['dublin.component.css']
})
export default class DublinComponent implements OnInit{


    restaurants: Array<Restaurant> = [];
    tempRestaurants: Array<Restaurant> = [];

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
        this.tempRestaurants.length = 0;
    }

    ngOnInit() {
      for(var i = 0; i < this.restaurants.length; i++) {
        if(this.restaurants[i].county == "Dublin") {
          this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    /*filter(cityType: string, foodType: string, priceType: string ): void{
      var city: string = null;
      var food: string = null;
      var price: string = null;

      for(var i = 0; i<this.restaurants.length; i++){
      if(city != null && )
    }*/

    filterCity(filterValue: string): void {
      console.log(filterValue);
      this.tempRestaurants.length = 0;
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].city == filterValue){
            this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    filterFood(filterValue: string): void {
      console.log(filterValue);
      this.tempRestaurants.length = 0;
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].category == filterValue){
            this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    filterPrice(filterValue: string): void {
      console.log(filterValue);
      this.tempRestaurants.length = 0;
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].price == filterValue){
            this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    filterRating(filterValue: string): void {

    }



}
