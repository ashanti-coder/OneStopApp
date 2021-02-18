import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullHousePageRoutingModule } from './full-house-routing.module';

import { FullHousePage } from './full-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullHousePageRoutingModule
  ],
  declarations: [FullHousePage]
})
export class FullHousePageModule {}
