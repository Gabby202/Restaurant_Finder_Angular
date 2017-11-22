export class Product {
    constructor(public description: string, public category: string, public price: number) {}
}

export class ProductService {
    getProducts(): Array<Product> {
        var products: Array<Product> = [
            new Product('Liverpool shirt', 'Leisure wear', 45),
            new Product('Everton shirt', 'Leisure wear', 5),
            new Product('Bugatti Chiron', 'Auto', 2000000),
            new Product('65 inch UHDTV', 'TV/Audio', 1800),
            new Product('Carving skis', 'Sports equipment', 350),
            new Product('Ski boots', 'Sports equipment', 150),
            new Product('Liverpool shirt', 'Leisure wear', 45),
            new Product('Everton shirt', 'Leisure wear', 5),
            new Product('Bugatti Chiron', 'Auto', 2000000),
            new Product('65 inch UHDTV', 'TV/Audio', 1800),
            new Product('Carving skis', 'Sports equipment', 350),
            new Product('Ski boots', 'Sports equipment', 150)

        ];
        return products;
    }
}
