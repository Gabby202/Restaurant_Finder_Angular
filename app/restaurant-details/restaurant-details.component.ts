import {Component, Input, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {ActivatedRoute} from '@angular/router';



@Component({
    moduleId:     module.id,
    selector:    'restaurant-details',
    templateUrl: 'restaurant-details.component.html',


})
export default class RestaurantDetailsComponent implements OnInit{

  restaurants: Array<Restaurant> = [];

  public name: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    
    let restaurantService = new RestaurantService();
    this.restaurants = restaurantService.getRestaurants();
}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; // (+) converts string 'id' to a number
       console.log(this.name);


       // In a real app: dispatch action to load the details here.
    });
  }







}
