import { Component, inject } from '@angular/core';
import { Product } from '../../../../../product';
import { ProductsService } from '../../../services/product.service';
import{ MatCardModule } from "@angular/material/card"
import{ MatButtonModule } from "@angular/material/button"

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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
