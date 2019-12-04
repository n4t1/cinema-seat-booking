import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplateComponent } from './login-template.component';
import { AngularMaterialModulesModule } from '@shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '@shared/modules/shared-modules.module';



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
