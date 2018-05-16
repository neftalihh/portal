import { Component, OnInit } from '@angular/core';
import { Product } from '../@core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = new Product();
  products : Product[] = [];


  constructor() { 
    this.product.id = 1;
    this.product.upc = '750000000';
    this.product.description = 'Leche evaporada';
    this.products.push(this.product);
    this.product = new Product();
    this.product.id = 2;
    this.product.upc = '750000002';
    this.product.description = 'Leche Clasica';
    this.products.push(this.product);
  }

  ngOnInit() {
  }

}
