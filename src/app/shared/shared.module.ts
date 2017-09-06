import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    NavComponent,
],
  exports: [
    CommonModule,
    NavComponent,
  ]
})
export class SharedModule { }
