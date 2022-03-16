import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './products-routing.module';
import { ProductsListPage } from './products-list/products-list.page';
import { ProductsFormPage } from './products-form/products-form.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsListPage,
    ProductsFormPage
  ],
  providers: [
    FormsModule
  ]
})
export class ProductsPageModule {}
