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
var product_service_1 = require('../../product-service/product-service');
var KildareComponent = (function () {
    function KildareComponent() {
        this.products = [];
        var productService = new product_service_1.ProductService();
        this.products = productService.getProducts();
    }
    KildareComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kildare-resturaunts',
            templateUrl: 'kildare.component.html',
            styleUrls: ['kildare.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], KildareComponent);
    return KildareComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KildareComponent;
//# sourceMappingURL=kildare.component.js.map