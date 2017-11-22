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
            new Product('Liverpool shirt', 'Leisure wear', 45),
            new Product('Everton shirt', 'Leisure wear', 5),
            new Product('Bugatti Chiron', 'Auto', 2000000),
            new Product('65 inch UHDTV', 'TV/Audio', 1800),
            new Product('Carving skis', 'Sports equipment', 350),
            new Product('Ski boots', 'Sports equipment', 150)
        ];
        return products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map