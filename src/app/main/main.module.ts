import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AngularMaterialModulesModule } from '../_shared/modules/angular-material-modules.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModulesModule
  ]
})
export class MainModule { }
