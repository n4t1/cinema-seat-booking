import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplateComponent } from './login-template.component';
import { AngularMaterialModulesModule, SharedModulesModule } from '@api/shared';



@NgModule({
  declarations: [LoginTemplateComponent],
  imports: [
    CommonModule,
    AngularMaterialModulesModule,
    SharedModulesModule
  ],
  exports: [LoginTemplateComponent]
})
export class LoginTemplateModule { }
