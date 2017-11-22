"use strict";
var Product = (function () {
    function Product(description, category, price) {
        this.description = description;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        var products = [
            new Product('Liverpool shirt', 'dublin', 45),
            new Product('Everton shirt', 'meath', 5),
            new Product('Bugatti Chiron', 'meath', 2000000),
            new Product('65 inch UHDTV', 'dublin', 1800),
            new Product('Carving skis', 'kildare', 350),
            new Product('Ski boots', 'dublin', 150),
            new Product('Liverpool shirt', 'kildare', 45),
            new Product('Everton shirt', 'meath', 5),
            new Product('Bugatti Chiron', 'Auto', 2000000),
            new Product('65 inch UHDTV', 'kildare', 1800),
            new Product('Carving skis', ' kildare', 350),
            new Product('Ski boots', 'Sports equipment', 150)
        ];
        return products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map