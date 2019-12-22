import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModulesModule, SharedModulesModule } from './modules';
import { SharedServicesModule } from './services';
import { SharedPipesModule } from './pipes';

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
