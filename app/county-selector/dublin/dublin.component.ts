import {Component} from '@angular/core';
import {Product, ProductService} from '../../product-service/product-service';

@Component({
   moduleId: module.id,
    selector: 'dublin-resturaunts',
    templateUrl: 'dublin.component.html',
    styleUrls:  ['dublin.component.css'] 
})
export default class DublinComponent {

    products: Array<Product> = [];

    constructor() {
        let productService = new ProductService();
        this.products = productService.getProducts();
    }
}
