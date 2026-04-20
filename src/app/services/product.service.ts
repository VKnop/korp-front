import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlApiProducts = 'http://localhost:8000/products';

  httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<Product[]>(this.urlApiProducts);
    }
}
