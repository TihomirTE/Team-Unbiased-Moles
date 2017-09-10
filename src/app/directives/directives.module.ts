import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './changeText.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective],
  exports: [
    HighlightDirective
  ]
})
export class DirectivesModule { }
