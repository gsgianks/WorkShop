import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form/form.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
	  pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}