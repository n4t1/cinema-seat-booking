import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RepertuarModule } from './repertuar/repertuar.module';
import { SharedModule } from '@api/shared';
import { MainSharedServicesModule } from '@main/shared';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    RepertuarModule,
    MainSharedServicesModule
  ]
})
export class MainModule { }
