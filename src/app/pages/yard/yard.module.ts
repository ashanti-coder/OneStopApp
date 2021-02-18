import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YardPageRoutingModule } from './yard-routing.module';

import { YardPage } from './yard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YardPageRoutingModule
  ],
  declarations: [YardPage]
})
export class YardPageModule {}
