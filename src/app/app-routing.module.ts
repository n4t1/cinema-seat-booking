import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    LoginModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
