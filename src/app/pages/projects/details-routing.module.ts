import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
	  pathMatch: 'full'
  },
  {
    path: 'details',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
