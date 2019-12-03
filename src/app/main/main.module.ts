import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AngularMaterialModulesModule } from '../_shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '../_shared/modules/shared-modules.module';
import { MainSharedServicesModule } from './_shared/services/_main-shared-services.module';
import { RepertuarModule } from './repertuar/repertuar.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RepertuarModule,
    MainSharedServicesModule,
    AngularMaterialModulesModule,
    SharedModulesModule,
  ]
})
export class MainModule { }
