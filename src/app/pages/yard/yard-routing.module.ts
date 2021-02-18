import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YardPage } from './yard.page';

const routes: Routes = [
  {
    path: '',
    component: YardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YardPageRoutingModule {}
