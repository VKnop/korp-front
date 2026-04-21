import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../../services/product.service';
import { CardComponent } from './card/card.component';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
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
