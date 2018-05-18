import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './@core/models/product';
import { environment } from '../environments/environment';

@Injectable()

export class ProductsService
{
    private server = environment.apiServer;
    headers: Headers;
    options: RequestOptions;

    products: Product[];

    constructor(private http: Http){
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({headers: this.headers});
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.server)
                   .map((response: Response) => <Product[]>response.json());
    }

}
