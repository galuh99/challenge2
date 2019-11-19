import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  
  {
    path: 'tambahkeranjang',
    loadChildren: () => import('./tambahkeranjang/tambahkeranjang.module').then( m => m.TambahkeranjangPageModule)
  },
  {
    path: 'tambahproduk',
    loadChildren: () => import('./tambahproduk/tambahproduk.module').then( m => m.TambahprodukPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
