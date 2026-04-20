import { ProductsService } from './../../../services/products.service';

import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { Product } from '../../../../../product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  urlApiProducts = 'http://localhost:8000/products';
  products: Product[] = []

  httpClient = inject(HttpClient)

  productsService = Inject(ProductsService)

  ngOnInit(){
    this.httpClient.get<Product[]>(this.urlApiProducts).subscribe((products)=>{
      this.products = products
    })
  }
}
