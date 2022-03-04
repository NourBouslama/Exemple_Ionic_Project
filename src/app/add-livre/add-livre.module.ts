import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLivrePageRoutingModule } from './add-livre-routing.module';

import { AddLivrePage } from './add-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLivrePageRoutingModule
  ],
  declarations: [AddLivrePage]
})
export class AddLivrePageModule {}
