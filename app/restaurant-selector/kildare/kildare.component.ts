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
      filterArray: string[] = [];
      cityFilter: string;
      foodFilter: string;
      priceFilter: string;
      scoreFilter: number;
  constructor() {
      let restaurantService = new RestaurantService();
      this.restaurants = restaurantService.getRestaurants();
      this.cityFilter = "";
      this.foodFilter = "";
      this.priceFilter = "";
  }

  ngOnInit() {
    for(var i = 0; i < this.restaurants.length; i++) {
      if(this.restaurants[i].county == "Kildare") {
        this.tempRestaurants.push(this.restaurants[i]);
      }
    }
  }

  //city id = 1, food = 2 etc...
  filter(value: string, id:number): void {
    //================ city filter was added ========================================


    if(id == 1) {

      //stop duplicates
      this.tempRestaurants.length = 0;
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
      for(var k = this.tempRestaurants.length-1; k>=0; k--){
        console.log("index: " + k);
        if(this.tempRestaurants[k].city != value) {
            console.log("Spliced: " +this.tempRestaurants[k].name);
            this.tempRestaurants.splice(k, 1);
        }
      }
      //====================== food filter was added =======================================
    } else if (id == 2) {
    this.tempRestaurants.length = 0;
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
      for(var k = this.tempRestaurants.length-1; k>=0; k--){
        console.log("index: " + k);
        if(this.tempRestaurants[k].category != value) {
            console.log("Spliced: " +this.tempRestaurants[k].name);
            this.tempRestaurants.splice(k, 1);
        }
      }
      //=================== price filter was added ======================================
    } else if (id == 3) {
      this.tempRestaurants.length = 0;
      this.priceFilter = value;
      this.filterArray.push(value);
      console.log(value);
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].price == value) {
          console.log("Added: " +this.restaurants[i].name);
            this.tempRestaurants.push(this.restaurants[i]);

        }
      }
      //remove items that arent part of filters
      for(var k = this.tempRestaurants.length-1; k>=0; k--){
        console.log("index: " + k);
        if(this.tempRestaurants[k].price != value) {
            console.log("Spliced: " +this.tempRestaurants[k].name);
            this.tempRestaurants.splice(k, 1);
        }
      }
    } else if (id == 4) {
      this.tempRestaurants.length = 0;

      if(value == "5") {
        this.scoreFilter = 5;
      } else if (value == "3"){
        this.scoreFilter = 3;
      } else if (value == "1") {
        this.scoreFilter = 1;
      }
      this.filterArray.push(value);
      console.log(value);
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].score >= this.scoreFilter) {
          console.log("Added: " +this.restaurants[i].name);
            this.tempRestaurants.push(this.restaurants[i]);

        }
      }
      //remove items that arent part of filters
      for(var k = this.tempRestaurants.length-1; k>=0; k--){
        console.log("index: " + k);
        if(this.tempRestaurants[k].score != this.scoreFilter) {
            console.log("Spliced: " +this.tempRestaurants[k].name);
            this.tempRestaurants.splice(k, 1);
        }
      }
    }

    //this.displayRestaurants(this.cityFilter, this.foodFilter, this.priceFilter);

  }


}
