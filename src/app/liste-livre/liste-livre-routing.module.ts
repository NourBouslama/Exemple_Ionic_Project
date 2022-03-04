import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeLivrePage } from './liste-livre.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeLivrePageRoutingModule {}
