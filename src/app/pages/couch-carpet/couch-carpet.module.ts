import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouchCarpetPageRoutingModule } from './couch-carpet-routing.module';

import { CouchCarpetPage } from './couch-carpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouchCarpetPageRoutingModule
  ],
  declarations: [CouchCarpetPage]
})
export class CouchCarpetPageModule {}
