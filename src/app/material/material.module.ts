import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatSelectModule, MatSliderModule } from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule
  ],
  exports: [
    MatSelectModule,
    MatCardModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
