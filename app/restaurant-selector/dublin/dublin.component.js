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
var restaurant_service_1 = require('../../restaurant-service/restaurant-service');
var DublinComponent = (function () {
    function DublinComponent() {
        this.restaurants = [];
        this.tempRestaurants = [];
        this.filteredRestaurants = [];
        this.filterArray = [];
        var restaurantService = new restaurant_service_1.RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
        this.cityFilter = "";
        this.foodFilter = "";
        this.priceFilter = "";
    }
    DublinComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].county == "Dublin") {
                this.tempRestaurants.push(this.restaurants[i]);
            }
        }
    };
    //city id = 1, food = 2 etc...
    DublinComponent.prototype.filter = function (value, id) {
        //================ city filter was added ========================================
        if (id == 1) {
            //stop duplicates
            this.tempRestaurants.length = 0;
            this.cityFilter = value;
            this.filterArray.push(value);
            console.log(value);
            for (var i = 0; i < this.restaurants.length; i++) {
                if (this.restaurants[i].city == value) {
                    console.log("Added: " + this.restaurants[i].name);
                    this.tempRestaurants.push(this.restaurants[i]);
                }
            }
            //remove items that arent part of filters
            for (var k = this.tempRestaurants.length - 1; k >= 0; k--) {
                console.log("index: " + k);
                if (this.tempRestaurants[k].city != value) {
                    console.log("Spliced: " + this.tempRestaurants[k].name);
                    this.tempRestaurants.splice(k, 1);
                }
            }
        }
        else if (id == 2) {
            this.tempRestaurants.length = 0;
            this.foodFilter = value;
            this.filterArray.push(value);
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
        else if (id == 3) {
            this.tempRestaurants.length = 0;
            this.priceFilter = value;
            this.filterArray.push(value);
            console.log(value);
            for (var i = 0; i < this.restaurants.length; i++) {
                if (this.restaurants[i].price == value) {
                    console.log("Added: " + this.restaurants[i].name);
                    this.tempRestaurants.push(this.restaurants[i]);
                }
            }
            //remove items that arent part of filters
            for (var k = this.tempRestaurants.length - 1; k >= 0; k--) {
                console.log("index: " + k);
                if (this.tempRestaurants[k].price != value) {
                    console.log("Spliced: " + this.tempRestaurants[k].name);
                    this.tempRestaurants.splice(k, 1);
                }
            }
        }
        else if (id == 4) {
            this.tempRestaurants.length = 0;
            if (value == "5") {
                this.scoreFilter = 5;
            }
            else if (value == "3") {
                this.scoreFilter = 3;
            }
            else if (value == "1") {
                this.scoreFilter = 1;
            }
            this.filterArray.push(value);
            console.log(value);
            for (var i = 0; i < this.restaurants.length; i++) {
                if (this.restaurants[i].score >= this.scoreFilter) {
                    console.log("Added: " + this.restaurants[i].name);
                    this.tempRestaurants.push(this.restaurants[i]);
                }
            }
            //remove items that arent part of filters
            for (var k = this.tempRestaurants.length - 1; k >= 0; k--) {
                console.log("index: " + k);
                if (this.tempRestaurants[k].score != this.scoreFilter) {
                    console.log("Spliced: " + this.tempRestaurants[k].name);
                    this.tempRestaurants.splice(k, 1);
                }
            }
        }
        //this.displayRestaurants(this.cityFilter, this.foodFilter, this.priceFilter);
    };
    DublinComponent.prototype.displayRestaurants = function (city, food, price) {
        this.filteredRestaurants.length = 0;
        for (var i = this.tempRestaurants.length - 1; i >= 0; i--) {
            if (this.tempRestaurants[i].city == city) {
                this.filteredRestaurants.push(this.tempRestaurants[i]);
            }
            if (this.tempRestaurants[i].category == food) {
                this.filteredRestaurants.push(this.tempRestaurants[i]);
            }
            if (this.tempRestaurants[i].price == price) {
                this.filteredRestaurants.push(this.tempRestaurants[i]);
            }
        }
    };
    //reset filters
    DublinComponent.prototype.clear = function () {
        this.tempRestaurants.length = 0;
        this.cityFilter = "";
        this.foodFilter = "";
        this.priceFilter = "";
    };
    DublinComponent.prototype.remove = function () {
        this.filteredRestaurants.splice(this.tempRestaurants.length - 1, 1);
    };
    DublinComponent.prototype.displayArray = function () {
        for (var i = 0; i < this.filteredRestaurants.length; i++) {
            console.log("array item " + i + ": " + this.filteredRestaurants[i].name);
        }
    };
    DublinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dublin-resturaunts',
            templateUrl: 'dublin.component.html',
            styleUrls: ['dublin.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DublinComponent);
    return DublinComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DublinComponent;
//# sourceMappingURL=dublin.component.js.map