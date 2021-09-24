import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then((module) => module.BasketModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
];

@NgModule({
  // 211B, 55.8kB
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
