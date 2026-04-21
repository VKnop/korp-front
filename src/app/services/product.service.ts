import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../components/interfaces/product';
import { ProductPayload } from '../components/interfaces/product_payload';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlApiProducts = 'http://localhost:8000/products';

  httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<Product[]>(this.urlApiProducts);
  }

  post(payload: ProductPayload){
    const request: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

      console.log(request.body)
    return this.httpClient.post("http://localhost:8000/product", request.body);
  }
}
