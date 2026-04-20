import { Component, inject } from '@angular/core';
import { Product } from '../../../../../product';
import { ProductsService } from '../../../services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: Product[] = []

  productsService = inject(ProductsService);

  ngOnInit(){
    return this.productsService.getAll().subscribe((products)=>{
      this.products = products
    })
  }
}
