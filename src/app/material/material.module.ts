import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialPageComponent } from './material-page/material-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

// for date
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//

import { DatepickerComponent } from './material-page/datepicker/datepicker.component';

@NgModule({
  declarations: [
    MaterialPageComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    MaterialPageComponent
  ]
})
export class MaterialModule { }
