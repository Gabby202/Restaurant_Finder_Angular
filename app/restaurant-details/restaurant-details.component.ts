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
  public imgUrl: string;

  constructor(private route: ActivatedRoute) {

    let restaurantService = new RestaurantService();
    this.restaurants = restaurantService.getRestaurants();
    let reviewService = new ReviewService();
    this.reviews =  reviewService.getReviews();

  }

  write(name:string, comment:string, rating:number):void {
    this.reviews.push(new Review(this.id, name, comment, rating));


  }



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(''+this.id);
    });

    for(var i = 0; i < this.reviews.length; i++) {
      if(this.reviews[i].id == this.id) {
        this.tempReviews.push(this.reviews[i]);
      }
    }

    this.imgUrl= 'app/images/menus/'+this.id+'.jpg';

  }







}
