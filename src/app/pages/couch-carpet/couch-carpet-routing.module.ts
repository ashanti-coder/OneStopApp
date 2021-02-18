import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouchCarpetPage } from './couch-carpet.page';

const routes: Routes = [
  {
    path: '',
    component: CouchCarpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouchCarpetPageRoutingModule {}
