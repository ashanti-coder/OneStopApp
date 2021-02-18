import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOnePage } from './view-one.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOnePageRoutingModule {}
