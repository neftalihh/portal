import { Component, OnInit } from '@angular/core';
import { Product } from '../@core/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})

export class ProductFormComponent{
    product = new Product();


    save(){
      console.log('asd')
    }
}
