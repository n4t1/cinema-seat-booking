import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTemplateComponent } from './movie-template.component';
import { AngularMaterialModulesModule } from '@shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '@shared/modules/shared-modules.module';



@NgModule({
  declarations: [MovieTemplateComponent],
  imports: [
    CommonModule,
    AngularMaterialModulesModule,
    SharedModulesModule
  ],
  exports: [MovieTemplateComponent]
})
export class MovieTemplateModule { }
