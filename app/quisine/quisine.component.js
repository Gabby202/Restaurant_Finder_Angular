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
var QuisineComponent = (function () {
    function QuisineComponent() {
        this.restaurants = [];
        this.tempRestaurants = [];
        var restaurantService = new restaurant_service_1.RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
    }
    QuisineComponent.prototype.filter = function (value, id) {
        if (id == 2) {
            this.tempRestaurants.length = 0;
            console.log(value);
            for (var i = 0; i < this.restaurants.length; i++) {
                if (this.restaurants[i].category == value) {
                    console.log("Added: " + this.restaurants[i].name);
                    this.tempRestaurants.push(this.restaurants[i]);
                }
            }
            //remove items that arent part of filters
            for (var k = this.tempRestaurants.length - 1; k >= 0; k--) {
                console.log("index: " + k);
                if (this.tempRestaurants[k].category != value) {
                    console.log("Spliced: " + this.tempRestaurants[k].name);
                    this.tempRestaurants.splice(k, 1);
                }
            }
        }
    };
    QuisineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quisine',
            templateUrl: 'quisine.component.html',
            styleUrls: ['quisine.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], QuisineComponent);
    return QuisineComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuisineComponent;
//# sourceMappingURL=quisine.component.js.map