import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFourPage } from './view-four.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFourPageRoutingModule {}
