import {Component, Input, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {ActivatedRoute} from '@angular/router';
import {Review, ReviewService} from '../review-service/review-service';


@Component({
    moduleId:     module.id,
    selector:    'restaurant-details',
    templateUrl: 'restaurant-details.component.html',
    styleUrls:  ['restaurant-details.component.css']


})
export default class RestaurantDetailsComponent implements OnInit{

  restaurants: Array<Restaurant> = [];
  reviews: Array<Review> = [];
  tempReviews: Array<Review> = [];
  public id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {

    let restaurantService = new RestaurantService();
    this.restaurants = restaurantService.getRestaurants();
    let reviewService = new ReviewService();
    this.reviews =  reviewService.getReviews();
  }

  write():void {
    this.reviews.push(new Review(this.id, "doiwj", "eownc", 2));
  }



  ngOnInit() {
    for(var i = 0; i < this.reviews.length; i++) {
      if(this.reviews[i].id == 0) {
        this.tempReviews.push(this.reviews[i]);
      }
    }


    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       console.log(''+this.id);
       // In a real app: dispatch action to load the details here.
    });


  }







}
