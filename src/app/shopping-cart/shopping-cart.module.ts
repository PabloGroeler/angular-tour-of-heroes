import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [ShoppingCartComponent, CheckoutComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartModule { }
