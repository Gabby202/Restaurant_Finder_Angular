export class Product {
    constructor(public description: string, public category: string, public price: number) {}
}

export class ProductService {
    getProducts(): Array<Product> {
        var products: Array<Product> = [
            new Product('Liverpool shirt', 'dublin', 45),
            new Product('Everton shirt', 'meath', 5),
            new Product('Bugatti Chiron', 'meath', 2000000),
            new Product('65 inch UHDTV', 'dublin', 1800),
            new Product('Carving skis', 'kildare', 350),
            new Product('Ski boots', 'dublin', 150),
            new Product('Liverpool shirt', 'kildare', 45),
            new Product('Everton shirt', 'meath', 5),
            new Product('Bugatti Chiron', 'dublin', 2000000),
            new Product('65 inch UHDTV', 'kildare', 1800),
            new Product('Carving skis', ' kildare', 350),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),
            new Product('Ski boots', 'dublin', 150),

        ];
        return products;
    }


}
