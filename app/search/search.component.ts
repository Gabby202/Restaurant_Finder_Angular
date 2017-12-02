import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'search',
    templateUrl: 'search.component.html',
    styleUrls:  ['search.component.css']

})
export default class SearchComponent implements OnInit {
  name: string;
  private sub: any;
  restaurants: Array<Restaurant> = [];
  constructor(private route: ActivatedRoute) {
    let restaurantService = new RestaurantService();
    this.restaurants = restaurantService.getRestaurants();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }
}
