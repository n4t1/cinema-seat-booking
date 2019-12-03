import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModulesModule } from 'src/app/_shared/modules/angular-material-modules.module';
import { SharedModulesModule } from 'src/app/_shared/modules/shared-modules.module';
import { LoginTemplateComponent } from './login-template.component';



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
