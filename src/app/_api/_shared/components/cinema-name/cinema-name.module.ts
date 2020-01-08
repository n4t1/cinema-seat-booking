import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaNameComponent } from './cinema-name.component';
import { AngularMaterialModulesModule } from '../../modules';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModulesModule
  ],
  declarations: [CinemaNameComponent],
  exports: [CinemaNameComponent]
})
export class CinemaNameModule { }
