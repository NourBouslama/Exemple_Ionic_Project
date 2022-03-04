import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeLivrePageRoutingModule } from './liste-livre-routing.module';

import { ListeLivrePage } from './liste-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeLivrePageRoutingModule
  ],
  declarations: [ListeLivrePage]
})
export class ListeLivrePageModule {}
