import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListPage } from './products-list/products-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListPage
  },
  {
    path: 'products-list',
    loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'products-form',
    loadChildren: () => import('./products-form/products-form.module').then( m => m.ProductsFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
