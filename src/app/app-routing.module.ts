import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'liste-livre',
    pathMatch: 'full'
  },
  {
    path: 'liste-livre',
    loadChildren: () => import('./liste-livre/liste-livre.module').then( m => m.ListeLivrePageModule)
  },
  {
    path: 'add-livre',
    loadChildren: () => import('./add-livre/add-livre.module').then( m => m.AddLivrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
