import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialPageComponent } from './material-page/material-page.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    MaterialPageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    MaterialPageComponent
  ]
})
export class MaterialModule { }
