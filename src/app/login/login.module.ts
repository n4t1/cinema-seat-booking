import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginTemplateModule } from './login-template/login-template.module';
import { CinemaNameModule, SharedModule } from '@api/shared';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginTemplateModule,
    SharedModule,
    CinemaNameModule
  ]
})
export class LoginModule { }
