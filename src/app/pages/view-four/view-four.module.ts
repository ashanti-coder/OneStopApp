import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFourPageRoutingModule } from './view-four-routing.module';

import { ViewFourPage } from './view-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFourPageRoutingModule
  ],
  declarations: [ViewFourPage]
})
export class ViewFourPageModule {}
