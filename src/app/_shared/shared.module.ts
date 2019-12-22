import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModulesModule } from '@shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '@shared/modules/shared-modules.module';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

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
