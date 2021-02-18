import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullHousePage } from './full-house.page';

const routes: Routes = [
  {
    path: '',
    component: FullHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullHousePageRoutingModule {}
