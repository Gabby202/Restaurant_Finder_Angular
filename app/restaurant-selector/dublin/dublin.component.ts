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

    }

    ngOnInit() {
      for(var i = 0; i < this.restaurants.length; i++) {
        if(this.restaurants[i].county == "Dublin") {

          this.tempRestaurants.length = 0;
        }
      }
    }





    filterCity(filterValue: string): void {
      console.log(filterValue);

      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].city == filterValue || filterValue == "All"){
            this.tempRestaurants.push(this.restaurants[i]);
        }else{
          this.tempRestaurants.splice(i, 1);
        }
        console.log(filterValue);
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
