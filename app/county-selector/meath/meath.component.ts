import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../../product-service/product-service';

@Component({
  moduleId: module.id,
   selector: 'meath-resturaunts',
   templateUrl: 'meath.component.html',
   styleUrls:  ['meath.component.css']
})
export default class MeathComponent implements OnInit{

      products: Array<Product> = [];


      constructor() {
          let productService = new ProductService();
          this.products = productService.getProducts();

      }
    public productsByType = this.products;
      ngOnInit(){
        this.productsByType = this.products.filter(product => product.category == "TV/Audio");
      }
}
