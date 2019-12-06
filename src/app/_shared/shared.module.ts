import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServicesModule } from './services/shared-services.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { AngularMaterialModulesModule } from './modules/angular-material-modules.module';
import { SharedModulesModule } from './modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AngularMaterialModulesModule,
    SharedModulesModule,
    SharedServicesModule,
    SharedPipesModule
  ]
})
export class SharedModule { }
