import { Component, computed, input } from '@angular/core';
import{ MatCardModule } from "@angular/material/card"
import{ MatButtonModule } from "@angular/material/button"
import { Product } from '../../../../../../product';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

 product = input.required<Product>();

 productId = computed(() => this.product().id);
 productCode = computed(() => this.product().code);
 productDescription = computed(() => this.product().description);
 productBalance = computed(() => this.product().balance);

}
