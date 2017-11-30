import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant-service/restaurant-service';
import {ReviewService} from '../review-tracker-service/review-tracker-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-item',
    templateUrl: 'restaurant-item.component.html',
    styleUrls:  ['restaurant-item.component.css'],
    providers: [ReviewService]

})


export default class RestaurantItemComponent implements OnInit{


    constructor(private reviewService: ReviewService) {}
    @Input() restaurant: Restaurant;
    public imgUrl: string;

    ngOnInit() {
      this.reviewService.log(`RestaurantItem initialized for Restaurant ${this.restaurant.name}`);
      this.imgUrl= 'app/images/' + this.restaurant.id + '.jpg';
    }

}
