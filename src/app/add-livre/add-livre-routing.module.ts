import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLivrePage } from './add-livre.page';

const routes: Routes = [
  {
    path: '',
    component: AddLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLivrePageRoutingModule {}
