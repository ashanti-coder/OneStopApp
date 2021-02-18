import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewThreePageRoutingModule } from './view-three-routing.module';

import { ViewThreePage } from './view-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewThreePageRoutingModule
  ],
  declarations: [ViewThreePage]
})
export class ViewThreePageModule {}
