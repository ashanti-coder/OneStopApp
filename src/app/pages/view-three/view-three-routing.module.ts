import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewThreePage } from './view-three.page';

const routes: Routes = [
  {
    path: '',
    component: ViewThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewThreePageRoutingModule {}
