import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { AngularMaterialModulesModule } from '../_shared/modules/angular-material-modules.module';
import { SharedModulesModule } from '../_shared/modules/shared-modules.module';


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    AngularMaterialModulesModule,
    SharedModulesModule
  ]
})
export class BookModule { }
