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
    filterArray: string[] = [];
    cityFilter: string;
    foodFilter: string;
    priceFilter: string;

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
        this.cityFilter = "";
    }

    ngOnInit() {
      for(var i = 0; i < this.restaurants.length; i++) {
        if(this.restaurants[i].county == "Dublin") {
          this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    //city id = 1, food = 2 etc...
    filter(value: string, id:number): void {
      //city filter was added
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
        //food filter was added
      } else if (id == 2) {
        this.foodFilter = value;
        //price filter was added
      } else if (id = 3) {
        thi.priceFilter = value;
      }

      //remove items that arent part of filters
      for(var k = this.tempRestaurants.length-1; k>=0; k--){
        console.log("index: " + k);
        if(this.tempRestaurants[k].city != value) {
            console.log("Spliced: " +this.tempRestaurants[k].name);
            this.tempRestaurants.splice(k, 1);
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
      this.tempRestaurants.splice(this.tempRestaurants.length-1, 1);
    }

    displayArray(): void{
      if(this.tempRestaurants.length > 0) {
        for(var i = 0; i < this.tempRestaurants.length; i++){
          console.log("array item " + i + ": " + this.tempRestaurants[i].name);
          //console.log("filterArray " + i + ": " + this.filterArray[i]);
        }
      }else {
        console.log("Array is empty");
      }
    }

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
