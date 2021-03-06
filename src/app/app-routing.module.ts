import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  {
    path: 'book/:moviePlayId/:roomId/:selectedTimeNumber',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: 'tmdbMovieSearch',
    loadChildren: () => import('./tmdb-movie-search/tmdb-movie-search.module').then(m => m.TmdbMovieSearchModule)
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
