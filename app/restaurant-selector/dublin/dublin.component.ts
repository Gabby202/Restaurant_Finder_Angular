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
    filteredRestaurants: Array<Restaurant> = [];

    filterArray: string[] = [];
    cityFilter: string;
    foodFilter: string;
    priceFilter: string;

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
        this.cityFilter = "";
        this.foodFilter = "";
        this.priceFilter = "";

    }

    ngOnInit() {
      for(var i = 0; i < this.restaurants.length; i++) {
        if(this.restaurants[i].county == "Dublin") {
          this.filteredRestaurants.push(this.restaurants[i]);
        }
      }
    }

    //city id = 1, food = 2 etc...
    filter(value: string, id:number): void {
      //================ city filter was added ========================================
      if(id == 1) {
        this.cityFilter = value;
        this.filterArray.push(value);
        console.log(value);
        for(var i = 0; i<this.restaurants.length; i++){
          if(this.restaurants[i].city == value) {
            console.log("Added: " +this.restaurants[i].name);
              this.tempRestaurants.push(this.restaurants[i]);

          }
        }
        //remove items that arent part of filters
  /*      for(var k = this.tempRestaurants.length-1; k>=0; k--){
          console.log("index: " + k);
          if(this.tempRestaurants[k].city != value) {
              console.log("Spliced: " +this.tempRestaurants[k].name);
              this.tempRestaurants.splice(k, 1);
          }
        }*/
        //====================== food filter was added =======================================
      } else if (id == 2) {
        this.foodFilter = value;

        this.filterArray.push(value);
        console.log(value);
        for(var i = 0; i<this.restaurants.length; i++){
          if(this.restaurants[i].category == value) {
            console.log("Added: " +this.restaurants[i].name);
              this.tempRestaurants.push(this.restaurants[i]);

          }
        }
        //remove items that arent part of filters
  /*      for(var k = this.tempRestaurants.length-1; k>=0; k--){
          console.log("index: " + k);
          if(this.tempRestaurants[k].category != value) {
              console.log("Spliced: " +this.tempRestaurants[k].name);
              this.tempRestaurants.splice(k, 1);
          }
        }*/
        //=================== price filter was added ======================================
      } else if (id == 3) {
        this.priceFilter = value;
      }

      this.displayRestaurants(this.cityFilter, this.foodFilter, this.priceFilter);

    }

    displayRestaurants(city: string, food: string, price: string): void {

      this.filteredRestaurants.length = 0;

      for(var i = this.tempRestaurants.length-1; i >= 0; i--) {


        if(this.tempRestaurants[i].city == city) {
          this.filteredRestaurants.push(this.tempRestaurants[i]);
        }
        if(this.tempRestaurants[i].category == food) {
          this.filteredRestaurants.push(this.tempRestaurants[i]);
        }
        if(this.tempRestaurants[i].price == price) {
          this.filteredRestaurants.push(this.tempRestaurants[i]);
        }
      }
    }

    //reset filters
    clear(): void {
      this.tempRestaurants.length = 0;
      this.cityFilter = "";
      this.foodFilter = "";
      this.priceFilter = "";
    }

    remove():void {
      this.filteredRestaurants.splice(this.tempRestaurants.length-1, 1);
    }

   displayArray(): void{
        for(var i = 0; i < this.filteredRestaurants.length; i++){
          console.log("array item " + i + ": " + this.filteredRestaurants[i].name);
        }
    }




}
