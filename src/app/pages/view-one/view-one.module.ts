import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOnePageRoutingModule } from './view-one-routing.module';

import { ViewOnePage } from './view-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOnePageRoutingModule
  ],
  declarations: [ViewOnePage]
})
export class ViewOnePageModule {}
