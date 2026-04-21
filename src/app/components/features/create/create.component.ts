import { ProductPayload } from './../../interfaces/product_payload';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

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

    // this.productsService.post({
    //   code: this.form.controls.code.value,
    //   description: this.form.controls.description.value,
    //   balance: this.form.controls.balance.value
    // });
    this.matSnackBar.open('Produto criado com sucesso', 'OK',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition:'top'
    });
    this.router.navigateByUrl('/');
  }
}
