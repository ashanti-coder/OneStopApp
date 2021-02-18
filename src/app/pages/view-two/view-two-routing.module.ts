import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTwoPage } from './view-two.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTwoPageRoutingModule {}
