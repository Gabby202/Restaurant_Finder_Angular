import {Component} from '@angular/core';
import {Product, ProductService} from '../../product-service/product-service';

@Component({
  moduleId: module.id,
   selector: 'meath-resturaunts',
   templateUrl: 'meath.component.html',
   styleUrls:  ['meath.component.css']
})
export default class MeathComponent {

      products: Array<Product> = [];

      constructor() {
          let productService = new ProductService();
          this.products = productService.getProducts();
      }
}
