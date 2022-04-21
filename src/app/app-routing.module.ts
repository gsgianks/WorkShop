import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
	  path: '',
	  redirectTo: 'home',
	  pathMatch: 'full'
	},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'requirements',
    loadChildren: () => import('./pages/requirements/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'details-project',
    loadChildren: () => import('./pages/projects/details.module').then( m => m.DetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
