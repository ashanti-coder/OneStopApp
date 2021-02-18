import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'windows',
    loadChildren: () => import('./pages/windows/windows.module').then( m => m.WindowsPageModule)
  },
  {
    path: 'full-house',
    loadChildren: () => import('./pages/full-house/full-house.module').then( m => m.FullHousePageModule)
  },
  {
    path: 'couch-carpet',
    loadChildren: () => import('./pages/couch-carpet/couch-carpet.module').then( m => m.CouchCarpetPageModule)
  },
  {
    path: 'yard',
    loadChildren: () => import('./pages/yard/yard.module').then( m => m.YardPageModule)
  },
  {
    path: 'view-one',
    loadChildren: () => import('./pages/view-one/view-one.module').then( m => m.ViewOnePageModule)
  },
  {
    path: 'view-two',
    loadChildren: () => import('./pages/view-two/view-two.module').then( m => m.ViewTwoPageModule)
  },
  {
    path: 'view-three',
    loadChildren: () => import('./pages/view-three/view-three.module').then( m => m.ViewThreePageModule)
  },
  {
    path: 'view-four',
    loadChildren: () => import('./pages/view-four/view-four.module').then( m => m.ViewFourPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
