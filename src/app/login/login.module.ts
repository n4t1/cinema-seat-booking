import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { AngularMaterialModulesModule } from '../_shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '../_shared/modules/shared-modules.module';


@NgModule({
  declarations: [
    LoginComponent, 
    LoginTemplateComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModulesModule,
    SharedModulesModule
  ]
})
export class LoginModule { }
