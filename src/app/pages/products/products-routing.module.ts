import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsFormPage } from './products-form/products-form.page';

import { ProductsListPage } from './products-list/products-list.page';

const routes: Routes = [
  {
	  path: '',
	  redirectTo: 'list',
	  pathMatch: 'full'
	},
  {
    path: 'list',
    component: ProductsListPage
  },
  {
    path: 'form',
    component: ProductsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
