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
var router_1 = require('@angular/router');
var RestaurantDetailsComponent = (function () {
    function RestaurantDetailsComponent(route) {
        this.route = route;
        this.restaurants = [];
        var restaurantService = new restaurant_service_1.RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
    }
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            console.log('' + _this.id);
            // In a real app: dispatch action to load the details here.
        });
    };
    RestaurantDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'restaurant-details',
            templateUrl: 'restaurant-details.component.html',
            styleUrls: ['restaurant-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], RestaurantDetailsComponent);
    return RestaurantDetailsComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantDetailsComponent;
//# sourceMappingURL=restaurant-details.component.js.map