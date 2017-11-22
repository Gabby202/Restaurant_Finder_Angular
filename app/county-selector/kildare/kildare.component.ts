import {Component} from '@angular/core';
import {Product, ProductService} from '../../product-service/product-service';

@Component({
    moduleId: module.id,
    selector: 'kildare-resturaunts',
    templateUrl: 'kildare.component.html',
    styleUrls:  ['kildare.component.css'] 

})
export default class KildareComponent {

      products: Array<Product> = [];

      constructor() {
          let productService = new ProductService();
          this.products = productService.getProducts();
      }
}
