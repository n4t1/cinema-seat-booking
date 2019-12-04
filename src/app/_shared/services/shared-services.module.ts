import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RepertuarService } from "./repertuar/repertuar.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RepertuarService]
})
export class SharedServicesModule {}
