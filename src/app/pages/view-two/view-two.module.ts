import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTwoPageRoutingModule } from './view-two-routing.module';

import { ViewTwoPage } from './view-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTwoPageRoutingModule
  ],
  declarations: [ViewTwoPage]
})
export class ViewTwoPageModule {}
