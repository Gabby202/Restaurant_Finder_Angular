import {Component, Input} from '@angular/core';
import {Product} from '../product-service/product-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-product-item',
    templateUrl: 'product-item.component.html',
    styleUrls:  ['product-item.component.css'] 
})
export default class ProductItemComponent {
    @Input() product: Product;
}
