import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RepertuarModule } from './repertuar/repertuar.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    RepertuarModule
  ]
})
export class MainModule { }
