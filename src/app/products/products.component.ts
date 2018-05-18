import { Component, OnInit } from '@angular/core';
import { Product } from '../@core/models/product';
import { ProductsService  } from '../app.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = new Product();
  products: Product[] = [];


  constructor(private service: ProductsService, private http: Http) {
    /*this.product.id = 1;
    this.product.upc = '750000000';
    this.product.description = 'Leche evaporada';
    this.products.push(this.product);
    this.product = new Product();
    this.product.id = 2;
    this.product.upc = '750000002';
    this.product.description = 'Leche Clasica';
    this.products.push(this.product);*/
    this.get_producs();
  }


  get_producs(){
    this.service.getProducts()
                .subscribe(data =>{
                 //console.log(data);
                this.products = data;
                });
  }

  ngOnInit() {
  }

}
