import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'prouct', loadChildren: './prouct/prouct.module#ProuctPageModule' },
  { path: 'likes', loadChildren: './likes/likes.module#LikesPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
