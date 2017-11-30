"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restaurant_service_1 = require('../restaurant-service/restaurant-service');
var review_tracker_service_1 = require('../review-tracker-service/review-tracker-service');
var RestaurantItemComponent = (function () {
    function RestaurantItemComponent(reviewService) {
        this.reviewService = reviewService;
    }
    RestaurantItemComponent.prototype.ngOnInit = function () {
        this.reviewService.log("RestaurantItem initialized for Restaurant " + this.restaurant.name);
        this.imgUrl = 'app/images/' + this.restaurant.id + '.jpg';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurant_service_1.Restaurant)
    ], RestaurantItemComponent.prototype, "restaurant", void 0);
    RestaurantItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-restaurant-item',
            templateUrl: 'restaurant-item.component.html',
            styleUrls: ['restaurant-item.component.css'],
            providers: [review_tracker_service_1.ReviewService]
        }), 
        __metadata('design:paramtypes', [review_tracker_service_1.ReviewService])
    ], RestaurantItemComponent);
    return RestaurantItemComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantItemComponent;
//# sourceMappingURL=restaurant-item.component.js.map