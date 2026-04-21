import { ProductPayload } from './../../interfaces/product_payload';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../../services/product.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService = inject(ProductsService);

  form = new FormGroup({
    code: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    balance: new FormControl<number>(0, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  onSubmit() {
    this.productsService.post({
      code: this.form.controls.code.value,
      description: this.form.controls.description.value,
      balance: this.form.controls.balance.value
    })
    .subscribe(() => {
      console.log("Aqui");
      alert('Sucesso!');
    });
  }
}
